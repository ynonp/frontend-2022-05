import { memo, useState, useCallback } from 'react'

const Header = memo(function Header() {
  console.log(`Header`);
  return (
    <h1>My Demo</h1>
  );
});


const Counter = memo(function Counter(props) {
  console.log(`Counter`);
  const { step=1, reset } = props;
  const [value, setValue] = useState(0);

  function clicked() {
    setValue(c => c + step);
    if ((value + step) >= 100) {
      reset();
    }
  }

  return (
    <div>
      <button onClick={clicked}>Clicks {value}</button>
    </div>
  );
});

const DividesByTen = memo(function DividesByTen(props) {
  const { value } = props;

  return (
    <p>{ value % 10 === 0 ? 'divides by 10' : 'not'}</p>
  );
});


function App() {
  console.log(`App`);
  const [step, setStep] = useState(1);

  const reset = useCallback(function reset() {
    setStep(1);
  }, [setStep]);

  return (
    <div>
      <Header />
      <DividesByTen value={step} />
      <input type="number" value={step} onChange={(e) => setStep(Number(e.target.value))} />
      <Counter step={2}    reset={reset} />
      <Counter step={step} reset={reset} />
      <Counter step={5}    reset={reset} />
      <Counter step={step} reset={reset} />
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App
