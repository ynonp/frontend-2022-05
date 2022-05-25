import { useState } from 'react';
import './App.css'
import Counter from './Counter';

// props is an object { name: '...' }
function LettersCounter(props) {
  const { name } = props;
  return (
    <p>In "{name}" there are {name.length} letters</p>
  )
}

function App() {
  const [name, setName] = useState('Ynon');
  
  function handleChangeName(e) {
    setName(e.target.value);
  }

  function clear() {
    setName('');
  }
  
  // React.createElement(LettersCounter, { name: name });
  
  return (
    <div>
      <MultiplicationGrid n={4} />
      <LettersCounter name={name} />
      <Counter />
      <Counter step={name.length} />
      <Counter step="3" />
      <input
        type="text"
        value={name}
        onChange={handleChangeName}
       />
      <button onClick={clear}>Clear</button>
      <p>Welcome {name}</p>
    </div>
  )
}

export default App
