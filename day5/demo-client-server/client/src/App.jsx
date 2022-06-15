import { useState } from 'react'
import { useSocket, useSocketEvent } from 'socket.io-react-hook';

function App() {
  const { socket, error } = useSocket('http://localhost:8080');
  const { lastMessage } = useSocketEvent(socket, 'message');

  function sendMessage(e) {
    socket.emit('message', e.target.value)
  }

  return <div>
    <p>My Client</p>
    <input type="text" onChange={sendMessage} value={lastMessage} />
    <p>Last Message = {lastMessage}</p>
  </div>
}

export default App
