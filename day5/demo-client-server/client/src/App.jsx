import { useState } from 'react'
import { useSocket, useSocketEvent } from 'socket.io-react-hook';

function App() {
  const { socket, error } = useSocket('http://localhost:8080');
  const { lastMessage } = useSocketEvent(socket, 'message');

  function sendMessage() {
    socket.emit('message', 'hello world')
  }

  return <div>
    <p>My Client</p>
    <input type="text" />
    <p>Last Message = {lastMessage}</p>
  </div>
}

export default App
