import { useState } from "react";
import { useNavigate } from "react-router-dom";
import pic from "./rock-paper-scissors.jpg";

function StartPage() {

    const [selection, setSelection] = useState(null);
    const navigate = useNavigate();
    function handleClick(option) {
        console.log(option)
        setSelection(option)
        navigate("/versus")
    }

    return (
        <div className="start-page">
         <div>
           <h1>Pick One!</h1>
          <div className="options">
             <button onClick={() => handleClick("Rock")}>ROCK</button>
             <button onClick={() => handleClick("Paper")}>PAPER</button>
             <button onClick={() => handleClick("Scissors")}>SCISSORS</button>
           </div>
           <img src={pic} alt="rock paper and scissors" />
         </div>
      
        </div>
    )
}

export default StartPage;