import './App.css'
import Painter from './painter';
import ImageSelector from './image_selector';
import ColorPicker from './color_picker';
// Repo is here:
// https://github.com/ynonp/frontend-2022-05/

// Lab: Take antd table:
// https://ant.design/components/table/
// And this starter
// And add a new component - imageSelectorTable
// that will use ant table to select active image
// Columns:
// 1. Image Name
// 2. How many non-white pixels in the picture
// 3. Is Active (only one is active)
// 4. (Bonus) small thumbnail of the image

// (*) talk about inline style

function App() {
  return (
    <div>
      <h1>My Painter App</h1>
      <div className="split">
        <ImageSelector />
        <Painter />
      </div>
      <ColorPicker />
    </div>
    
  )
}

export default App
