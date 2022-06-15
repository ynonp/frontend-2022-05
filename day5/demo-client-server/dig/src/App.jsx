function App() {
  return (
    <div>
      <h1>Your Job</h1>
      <p>
        <ul>
          <li><input type="checkbox" />Implement the code so adding a bookmark will create a new item in the list</li>
          <li><input type="checkbox" />Bookmarks will be shared between clients (using the server)</li>
          <li><input type="checkbox" />Server will save all bookmarks to a local file</li>
          <li><input type="checkbox" />When a client starts, they will get all the data from the file (on the server)</li>
          <li><input type="checkbox" />Implement +1 and -1, and also update the file</li>
        </ul>
      </p>
      <h1>Bookmark Share</h1>
      <div>
        <label>
          Share a site you like:
          <input type="text" />
        </label>
        <button>Send</button>
      </div>

      <div>
        <h2>Shared Sites</h2>
        <ul>
          <li>
            <button>-1</button>
            <span>[19] </span>
            <button>+1</button>
            <a href="https://duckduckgo.com/" target="_blank">https://duckduckgo.com/</a>
          </li>
          <li>
            <button>-1</button>
            <span>[15] </span>
            <button>+1</button>
            <a href="https://www.ecosia.org/" target="_blank">https://www.ecosia.org/</a>
          </li>
          <li>
            <button>-1</button>
            <span>[10] </span>
            <button>+1</button>
            <a href="https://www.bing.com/" target="_blank">https://www.bing.com/</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App
