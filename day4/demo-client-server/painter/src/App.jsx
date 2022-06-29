import ViewImage from './view_image';
import './App.css';
import { useSocket, useSocketEvent } from 'socket.io-react-hook';

const defaultImage = JSON.stringify([
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
]);

function App() {
  const { socket, error } = useSocket('http://localhost:8080');  
  const { lastMessage=defaultImage } = useSocketEvent(socket, 'message');

  function clicked(row, column) {
    const image = JSON.parse(lastMessage);
    image[row][column] = 1;
    socket.emit('message', JSON.stringify(image));

    // localStorage.setItem('image', JSON.stringify(image));
  }

  return (
    <div>
      <h1>My Image</h1>
      <ViewImage
        image={JSON.parse(lastMessage)}
        onClick={(row, column) => clicked(row, column)}
      />
    </div>
  );
}

export default App
