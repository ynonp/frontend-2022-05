import { useState } from 'react';
import { useSocket, useSocketEvent } from 'socket.io-react-hook';

function App() {
  const [linkText, setLinkText] = useState('');
  const { socket, error } = useSocket('http://localhost:8080');  
  const { lastMessage } = useSocketEvent(socket, 'links');

  const links = lastMessage || [];
  console.log(lastMessage);

  function share() {
    socket.emit('share', linkText);
  }

  function like(href) {
    socket.emit('like', href);
  }

  function dislike(href) {
    socket.emit('unlike', href);
  }


  return (
    <div>
      <h1>Your Job</h1>
      <ul>
        <li><input type="checkbox" />Implement the code so adding a bookmark will create a new item in the list</li>
        <li><input type="checkbox" />Bookmarks will be shared between clients (using the server)</li>
        <li><input type="checkbox" />Server will save all bookmarks to a local file</li>
        <li><input type="checkbox" />When a client starts, they will get all the data from the file (on the server)</li>
        <li><input type="checkbox" />Implement +1 and -1, and also update the file</li>
      </ul>
      <h1>Bookmark Share</h1>
      <div>
        <label>
          Share a site you like:
          <input type="text" value={linkText} onChange={(e) => setLinkText(e.target.value)} />
        </label>
        <button onClick={share}>Send</button>
      </div>

      <div>
        <h2>Shared Sites</h2>
        <ul>
          {links.map(link => (
            <li key={link.href}>
              <button onClick={() => like(link.href)} >+1</button>
              <span>[{link.likes} ]</span>
              <button onClick={() => dislike(link.href)}>-1</button>
              <a href={link.href} target="_blank">{link.href}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App
