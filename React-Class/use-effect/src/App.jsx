import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [newCount, setNewCount] = useState(0);

  useEffect(() => {
    console.log("useEffect Called !!!");
    document.title = `You Clicked ${count} ${newCount} times`;
  }, [count, newCount]);
  return (
    <div className="text-center py-5">
      <p>You Click the button {count}times</p>
      <p>You Click the New Count button {newCount} times</p>
      <button className="btn btn-success" onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <br />
      <br />
      <button
        className="btn btn-danger"
        onClick={() => setNewCount(newCount + 1)}
      >
        Click New Button
      </button>
    </div>
  );
}

export default App;
