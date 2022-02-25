import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "./App";

function VersusPage() {
  const { selection } = useContext(Context);
  const [random, setRandom] = useState(null);
  //console.log(selection)
  const navigate = useNavigate();
  const generateRandom = () => {
    //generate computer's selection
  };
  const finalText = () => {
    if (random === selection) {
        let winner = "IT'S A TIE!"
        return winner;
    }
    //add cases
  };

  return (
    <div className="versus-view">
      <h1>Versus!</h1>
      <div className="versus">
        <h2 className="column">
          Your choice: <span>{selection}</span>
        </h2>
        <h2 className="column">
          Computer's choice: <span>X</span>
        </h2>
      </div>
      <div className="final">
        {finalText}
        <button className="play-again" onClick={() => navigate("/")}>Play Again!</button>
      </div>
    </div>
  );
}

export default VersusPage;
