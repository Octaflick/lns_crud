import { useEffect, useState } from "react";

const App = () => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/items")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
      {items && items.map(item => {
        <div>
          <p>{item.itemName}</p>
          <p>{item.type}</p>
        </div>
      })}
    </div>
  );
};

export default App;
