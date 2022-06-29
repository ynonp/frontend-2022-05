import React, { useState, useCallback, memo, useDeferredValue } from 'react'
// npm install --save tinycolor2
import tinycolor from 'tinycolor2';

const ColorBox = memo(function ColorBox(props) {
  const { start, spin, onClick, id } = props;
  const color = tinycolor(start).spin(spin).toString();
  console.log('ColorBox');

  return (
    <div
      onClick={onClick}
      data-id={id}
      style={{
        width: '50px',
        height: '50px',
        background: color,

        display: 'inline-block',
        margin: '5px',
      }} >{id}</div>
  );
});

function ColorPalette(props) {
  console.log('ColorPalette');

  const { start } = props;
  const [deletedBoxes, setDeletedBoxes] = useState(new Set());
  const [_, setForceRender] = useState(false);

  const removeBox = useCallback(function removeBox(e) {
    const id = e.target.dataset.id;
    deletedBoxes.add(Number(id));
    setForceRender(x => !x);
  }, [deletedBoxes, setForceRender]);

  const colors = [];
  for (let i=-360; i < 360; i++) {
    if (deletedBoxes.has(i)) continue;

    colors.push(
      <ColorBox
        start={start}
        spin={i}
        onClick={removeBox}
        id={i}
        key={i}
      />
    );
  }

  function reset() {
    setDeletedBoxes(new Set());
  }

  return (
    <>
      <button onClick={reset}>Reset</button>
      {colors}
    </>
  );
}

function Counter() {
  const [ticks, setTicks] = useState(0);
  return <button onClick={() => setTicks(v => v + 1)}>Click Me ... {ticks}</button>
}


function App() {
  const [color, setColor] = useState('#000000');
  const deferredColor = useDeferredValue(color);
  console.log('ColorSelector');
  return (
    <div>
      <Counter />
      <div>
        <input type="color" value={color} onChange={(e) => setColor(e.target.value) } />
      </div>
      <ColorPalette start={deferredColor} />
    </div>
  );
}

export default App
