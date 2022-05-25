import React from 'react';
import './App.css'

function App() {
  return (
    <div>
      <p>Hello World</p>
      <p>I love virtual DOM</p>
      <form>
        <input type="text" />
      </form>
    </div>
  );
}

// function App() {
//   return React.createElement('div', {},
//     React.createElement('p', {}, 'Hello World'),
//     React.createElement('p', {}, 'I love Virtual DOM'),
//     React.createElement('form', {}, 
//       React.createElement('input', { type: 'text' }),
//     )
//   );
// }

export default App
