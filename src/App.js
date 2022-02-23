import { useState } from "react";
import {
  BrowserRouter,
  useNavigate,
  Redirect,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import StartPage from "./StartPage";
import VersusPage from "./VersusPage";

function App() {
  const [selection, setSelection] = useState(null);
  //const navigate = useNavigate();

  const generateRandom = () => {
    //generate computer's selection
  };

  const winText = () => {
    //add text noting the winner
  };

  //   function handleSubmit(e) {
  //     e.preventDefault();
  //     navigate('/');
  // }

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route exact={true} path="/" element={<StartPage />} />
          <Route exact={true} path="/versus" element={<VersusPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );

  // return (
  //   <div className="select-view">
  //     {selection === null ? (
  //       <div>
  //         <h1>Pick One!</h1>

  //         <div className="options">
  //           <button onClick={() => setSelection("Rock")}>ROCK</button>
  //           <button onClick={() => setSelection("Paper")}>PAPER</button>
  //           <button onClick={() => setSelection("Scissors")}>SCISSORS</button>
  //         </div>
  //         <img src={pic} alt="rock paper and scissors" />
  //       </div>
  //     ) : (
  //       <div className="versus-view">
  //         <h1>Versus!</h1>
  //         <div className="versus">
  //           <h2 className="column">Your choice: <span>{selection}</span></h2>
  //           <h2 className="column">Computer's choice: <span>X</span></h2>
  //         </div>
  //         <div className="final">
  //           {winText}
  //          <button>Play Again!</button>

  //           </div>
  //       </div>
  //     )}
  //   </div>
  // );
}

export default App;
