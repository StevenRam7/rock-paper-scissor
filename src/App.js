import "./App.css";
import pic from "./rock-paper-scissors.jpg";

function App() {
  return (
    <div>
      <h1>Pick One!</h1>

      <div className="options">
        <button>ROCK</button>
        <button>PAPER</button>
        <button>SCISSORS</button>
      </div>
      <img src={pic} alt="rock paper and scissors" />
    </div>
  );
}

export default App;
