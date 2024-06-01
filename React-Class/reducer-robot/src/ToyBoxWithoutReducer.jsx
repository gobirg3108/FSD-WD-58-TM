import React, { useState } from "react";

function ToyBoxWithoutReducer() {
  const [toys, setToys] = useState(["blocks", "cars", "dolls"]);

  const addToy = (toy) => {
    setToys([...toys, toy]);
  };
  const removeToys = (toy) => {
    setToys(toys.filter((t) => t !== toy));
  };
  return (
    <div>
      <h1>Toy Box</h1>
      {toys.map((toy, index) => (
        <p key={index}> {toy}</p>
      ))}
      <button onClick={() => addToy("barbie")}>Add</button>
      <button onClick={() => removeToys("cars")}>Remove</button>
    </div>
  );
}

export default ToyBoxWithoutReducer;
