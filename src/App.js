import { useState } from "react";
import "./App.css";
import pic from "./rock-paper-scissors.jpg";

function App() {
  const [selection, setSelection] = useState();

  //add useEffect

  return (
    <div>
      <h1>Pick One!</h1>

      <div className="options">
        <button onClick={() => setSelection("Rock")}>ROCK</button>
        <button onClick={() => setSelection("Paper")}>PAPER</button>
        <button onClick={() => setSelection("Scissors")}>SCISSORS</button>
      </div>
      <img src={pic} alt="rock paper and scissors" />
    </div>
  );
}

export default App;
