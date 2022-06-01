import { createContext, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Painter from './painter';
import ImageSelector from './image_selector';

// Repo is here:
// https://github.com/ynonp/frontend-2022-05/

// (*) talk about inline style

function App() {
  return (
    <div>
      <h1>My Painter App</h1>
      <div className="split">
        <ImageSelector />
        <Painter />
      </div>
    </div>
    
  )
}

export default App
