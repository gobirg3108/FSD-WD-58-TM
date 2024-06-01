import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Child from "./Child";
import GrandChild from "./GrandChild"

function App() {
  const [familyName, setFamilyName] = useState("");
  const updateFamilyName = (name) => {
    setFamilyName(name);
  };

  return (
    <>
      <p>Family Name: {familyName}</p>
      <button onClick={() => updateFamilyName("Gallers")}>
        Get Family Name
      </button>
      <Child familyName={familyName} />
    </>
  );
}

export default App;
