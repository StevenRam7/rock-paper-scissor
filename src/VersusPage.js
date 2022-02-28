import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Context } from "./App";

function VersusPage() {
  const { selection } = useContext(Context);
  const [random, setRandom] = useState(null);
  const navigate = useNavigate();
  function generateRandom() {
    const options = ["Rock", "Paper", "Scissors"];
    const choice = options[Math.floor(Math.random() * options.length)];
    setRandom(choice);
  }

  function finalText() {
    let result;
    switch (selection + random) {
      case "RockScissors":
      case "ScissorsPaper":
      case "PaperRock":
        result = "YOU WIN!!";
        break;
      case "RockPaper":
      case "PaperScissors":
      case "ScissorsRock":
        result = "YOU LOSE!!";
        break;
      case "RockRock":
      case "ScissorsScissors":
      case "PaperPaper":
        result = "IT'S A TIE!!";
        break;
      default:
        result = null;
    }
    return result;
  }

  useEffect(() => {
    generateRandom();
  }, [selection]);

  return (
    <div className="versus-view">
      <h1>Versus!</h1>
      <div className="versus">
        <h2 className="column">
          Your choice: <span>{selection}</span>
        </h2>
        <h2 className="column">
          Computer's choice: <span>{random}</span>
        </h2>
      </div>
      <div className="final">
        <div className="final-text">{finalText()}</div>

        <button onClick={() => navigate("/")}>Play Again!</button>
      </div>
    </div>
  );
}

export default VersusPage;
