import React from 'react';
import './App.css'

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function App() {
  return (
    <div className="game">
      <p data-my-stuff="hello">Today is: {days[0]}</p>
      <p>I love virtual DOM</p>
      <p>{days.join(', ')}</p>
      <ul>
        {
          days.map(day => (<li>{day}</li>))
        }
      </ul>
      <form>
        <input type="text" value={days[1]} readOnly />
      </form>
    </div>
  );
}

// function App() {
//   return React.createElement('div', { className: "game" },
//     React.createElement('p', {}, 'Hello World'),
//     React.createElement('p', {}, 'I love Virtual DOM'),
//     React.createElement('form', {}, 
//       React.createElement('input', { type: 'text' }),
//     )
//   );
// }

export default App
