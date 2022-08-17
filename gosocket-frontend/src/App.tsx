import { useState, useEffect, useRef, FunctionComponent, MouseEvent, MutableRefObject } from 'react'
import { msgEncoder } from './utils/msgEncoder';
import './App.css'



const App: FunctionComponent = () => {
  const [message, setMessage] = useState<string>('');
  const [serverMessage, setServerMessage] = useState<string>('');
  const socketRef: MutableRefObject< WebSocket | null> = useRef(null);
  
  
  const submitHandler = (e:MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    const stringifiedMsg = msgEncoder(message);
    socketRef.current?.send(stringifiedMsg);
    setMessage('');
  }
  
  useEffect(() => {
    socketRef.current = new WebSocket('ws://localhost:8080/socket');
    console.log(socketRef.current, "socketRef.current")
    socketRef.current.onmessage = (msg) => {
      setServerMessage(msg.data);
      console.log(msg.data, "msg.data")
    }
  
  }, []);


  return (
    <div className="App">
      <h1>WebSocket Chat</h1>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Type your message" value={message} className="input" onChange={(e) => setMessage(e.target.value)} />
        <button>Send Message</button>
      </form>
      <div className="server-messages">
        <h3>Message from the Server</h3>
        <p className="server-message">{serverMessage}</p>
      </div>
    </div>
  )
}

export default App
