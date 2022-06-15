import './App.css'

function defaultRenderItem(item) {
  return item.text;
}

function List(props) {
  const { items, renderItem=defaultRenderItem } = props;

  return (
    <div>
      <h1>My List</h1>
      <ul>
      {items.map(item => (
        <li key={item.key}>{renderItem(item)}</li> 
      ))}
      </ul>
    </div>
  );
}


function App() {
  const items = [
    { text: 'one', key: 'a', href: 'https://www.google.com' },
    { text: 'two', key: 'b' },
    { text: 'three', key: 'c' },
  ];

  function renderItem(item) {
    if (item.href) {
      return <a href={item.href}>{item.text}</a>;
    } else {
      return item.text;
    }
  }

  return (
    <div>
      <h1>I Am App</h1>
      <List
        items={items}
        renderItem={renderItem}
      />
    </div>
  );
}

export default App









