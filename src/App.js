import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import StartPage from "./StartPage";
import VersusPage from "./VersusPage";

function App() {
  const [selection, setSelection] = useState(null);

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
}

export default App;
