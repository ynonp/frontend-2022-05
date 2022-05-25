import { useState } from 'react';
import './App.css'
import Counter from './Counter';
import MultiplicationGrid from './solutions/MultiplicationGrid';
import { FaBeer, FaApple } from 'react-icons/fa';
import MultiInput from './solutions/MultiInput';
import Time from './solutions/Time';

import { Steps } from 'antd';

const { Step } = Steps;

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
      <MultiInput />
      <hr />
      <Time />
      <hr />
      <h3> Lets go for a <FaBeer />? </h3>
      <h3> Want an <FaApple /> ?</h3>
      <MultiplicationGrid n={4} />
      <LettersCounter name={name} />

      <Steps current={1}>
        <Step title="Finished" description="This is a description." />
        <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
        <Step title="Waiting" description="This is a description." />
      </Steps>

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
