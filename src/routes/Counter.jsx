import { useState } from "react";
import { useCount } from "../hooks/useCount";
import { Link } from "react-router-dom";
import "./App.css";

export default function Counter() {
  const { count, increment, decrement, reset, setValue } = useCount();
  const [newCount, setNewCount] = useState("");

  function handleOnChange(e) {
    setNewCount(e.target.value);
    e.target.value = newCount;
  }

  function handleOnClick() {
    setValue(newCount);
    setNewCount("");
  }

  return (
    <div className="App"> <h3>Counter App</h3>
      <div className="container1">{count}</div>
      <div className="container2"><button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>C</button> </div>

      <div className="container3">
      <input value={newCount} type="number" onChange={handleOnChange} />
      <button onClick={handleOnClick}>Set count value</button>
      <Link to="/">
        {" "}
        <p>Back to Home Page</p>{" "}
      </Link> </div>
    
    </div>
  );
}
