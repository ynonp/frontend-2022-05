import { useState } from "react";
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function App() {
  const [filter, setFilter] = useState('');
  const [selectedDays, setSelectedDays] = useState([]);

  const daysToShow = days.filter(d => d.toLocaleLowerCase().includes(filter));
  return (
    <div>
      <input type="search" value={filter} onChange={(e) => setFilter(e.target.value)} />
      <ul>
        {daysToShow.map(day => (
          <li key={day}>
            <label>
              {/* <input type="checkbox" checked={selectedDays.includes(day)} /> */}
              <input type="checkbox" />
              {day}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
