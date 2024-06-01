import React, { useReducer } from "react";

function ToyBoxWithReducer(toys, action) {
  switch ((action, type)) {
    case "add_toy":
      return [...toys, action.payload];
    case "remove_toy":
      return toys.filter((toy) => toy !== action.payload);

    default:
      return toys;
  }
}
function ToyBoxWithReducer() {
  const [toys, dispatch] = useReducer(reducer,[("blocks", "cars", "dolls")]);

  return (
    <div>
      <h1>Toy Box With useReducer</h1>
      {toys.map((toy, index) => (
        <p key={index}> {toy}</p>
      ))}
      <button onClick={() => dispatch({ type: "add_toy", payload: "puzzle" })}>
        Add
      </button>
      <button
        onClick={() => dispatch({ type: "remove_toy", payload: "cars" })}
      ></button>
    </div>
  );
}

export default ToyBoxWithReducer;
