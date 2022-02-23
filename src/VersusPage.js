import { useState } from "react";
import { useNavigate } from "react-router-dom";

function VersusPage() {
  const navigate = useNavigate();
  const generateRandom = () => {
    //generate computer's selection
  };
  const winText = () => {
    //add text noting the winner
  };

  return (
    <div className="versus-view">
      <h1>Versus!</h1>
      <div className="versus">
        <h2 className="column">
          Your choice: <span>SELECTION</span>
        </h2>
        <h2 className="column">
          Computer's choice: <span>X</span>
        </h2>
      </div>
      <div className="final">
        {winText}
        <button onClick={() => navigate("/")}>Play Again!</button>
      </div>
    </div>
  );
}

export default VersusPage;
