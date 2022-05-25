import { useState } from 'react';
export default function Counter(props) {
  const { step=1 } = props;
  const [value, setValue] = useState(0);

  function inc() {
    // update
    setValue(c => c + step);
  }

  function reset() {
    // set
    setValue(0);
  }

  return (
    <button onClick={inc}>{value}</button>
  )
}

