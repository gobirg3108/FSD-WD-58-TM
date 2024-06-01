import { useState } from "react";
import Tree from "./Tree.jsx";

function App() {
  const [color, setColor] = useState("green");
  const [fruit, setFruit] = useState("apple");

  function handleChangeColor(newColor) {
    setColor(newColor);
  }

  function handleChangeFruit(newFruit) {
    setColor(newFruit);
  }

  return (
    <div>
      <Tree color={color} fruit={fruit} />
      <button onClick={() => handleChangeColor("red")}>RED</button>
      <button onClick={() => handleChangeColor("blue")}>BLUE</button>
      <button onClick={() => handleChangeColor("oranges")}>ORANGES</button>
      <button onClick={() => handleChangeColor("guava")}>GUAVA</button>
    </div>
  );
}

export default App;
