import { useState, useEffect } from 'react';
import './App.css'

function useInterval(ms) {
  const [ticks, setTicks] = useState(0);

  useEffect(() => {
    // Setup
    const timer = setInterval(() => {
      // What to do when external world changes
      // External World => State
      setTicks(c => c + 1);
    }, ms);

    return () => {
      // Teardown code
      clearInterval(timer);
    }
  }, [ms]);
  return ticks;
}

function NewTimer(props) {
  const { interval=1000 } = props;
  const ticks = useInterval(interval);

  return <span>{ticks}</span>
}








function Timer(props) {
  const { interval=1000 } = props;
  const [ticks, setTicks] = useState(0);

  useEffect(() => {
    // Setup
    const timer = setInterval(() => {
      // What to do when external world changes
      // External World => State
      setTicks(c => c + 1);
    }, interval);

    return () => {
      // Teardown code
      clearInterval(timer);
    }
  }, [interval]);

  return (
    <span>{ticks}</span>
  );
}


function Counter({ value }) {
  console.log('Counter');
  return (<p>Counter - {value}</p>);
}

function Info() {
  console.log('Info');
  return <p>Info</p>
}

function Footer() {
  console.log('Footer');
  return (
    <div>
      <Info />
      <p>Footer</p>
    </div>
  );
}

function TimerWithCheckbox() {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <>
      <input type="checkbox" checked={showTimer} onChange={() => setShowTimer(v=> !v)} />
      {showTimer && <Timer />}
    </>
  );
}

function App() {
  console.log('App');
  const [text, setText] = useState(1000);
  return (
    <div>
      <input type="number" value={text} onChange={(e) => setText(e.target.value)} />
      <Timer interval={Number(text)} />
      <span> | </span>
      <NewTimer interval={Number(text)} />
      <TimerWithCheckbox />
      <p>I Am App</p>
      <Counter value={5} />
      <Counter value={7} />
      <Footer />
    </div>
  );
}

export default App
