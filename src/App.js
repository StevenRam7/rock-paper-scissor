import { useState } from "react";
import "./App.css";
import pic from "./rock-paper-scissors.jpg";

function App() {
  const [selection, setSelection] = useState(null);

  const generateRandom = () => {
    //generate computer's selection
  }

  return (
    <div className="select-view">
      {selection === null ? (
        <div>
          <h1>Pick One!</h1>

          <div className="options">
            <button onClick={() => setSelection("Rock")}>ROCK</button>
            <button onClick={() => setSelection("Paper")}>PAPER</button>
            <button onClick={() => setSelection("Scissors")}>SCISSORS</button>
          </div>
          <img src={pic} alt="rock paper and scissors" />
        </div>
      ) : (
        <div className="versus-view">
          <h1>Versus!</h1>
          <div className="versus">
            <h2>Your choice: {selection}</h2>
            {/* columns are uneven* */}
            <h2 className="column2">Computer's choice: X</h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
