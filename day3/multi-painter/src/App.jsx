import { createContext, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Painter from './painter';

// Repo is here:
// https://github.com/ynonp/frontend-2022-05/

// (*) talk about inline style

const image = [
    [0, 0, 4, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
];

function App() {
  return (
    <div>
      <h1>My Painter App</h1>
      <Painter image={image} />
    </div>
    
  )
}

export default App
