import './App.css'
import Painter from './painter';
import ImageSelector from './image_selector';
import ColorPicker from './color_picker';
import TableImageSelector from './table_image_selector';
import 'antd/dist/antd.css';

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


// To install antd:
// 1. From shell: npm install --save antd
// 2. In App: import 'antd/dist/antd.css';

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
      <TableImageSelector />
    </div>
    
  )
}

export default App
