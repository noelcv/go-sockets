import { useState, useEffect, FunctionComponent, MouseEvent } from 'react'
import { msgEncoder } from './utils/msgEncoder';
import './App.css'



const App: FunctionComponent = () => {
  const [message, setMessage] = useState<string>('');
  
  
  const submitHandler = (e:MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    const stringifiedMsg = msgEncoder(message);
    //TODO: send message to server;
    setMessage('');
  }
  
  

  return (
    <div className="App">
      <h1>WebSocket Chat</h1>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Type your message" value={message} className="input" onChange={(e) => setMessage(e.target.value)} />
        <button>Send Message</button>
      </form>
    </div>
  )
}

export default App
