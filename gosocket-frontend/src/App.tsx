import { useState, FunctionComponent, MouseEvent } from 'react'
import { msgEncoder } from './utils/msgEncoder';
import './App.css'



const App: FunctionComponent = () => {
  const [message, setMessage] = useState<string>('');
  
  
  const submitHandler = (e:MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    const objMsg = msgEncoder(message);
    console.log(objMsg, 'obj msg')
    setMessage('');
  }

  return (
    <div className="App">
      <h1>WebSocket Chat</h1>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Type your message" className="input" onChange={(e) => setMessage(e.target.value)} />
        <button>Send Message</button>
      </form>
    </div>
  )
}

export default App
