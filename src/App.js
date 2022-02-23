import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import StartPage from "./StartPage";
import VersusPage from "./VersusPage";
import React from "react";

export const Context = React.createContext({
  selection: null,
  setSelection: () => {},
});

function App() {
  const [selection, setSelection] = useState(null);

  return (
    <div className="app">
      <BrowserRouter>
        <Context.Provider value={{ selection, setSelection }}>
          <Routes>
            <Route exact={true} path="/" element={<StartPage />} />
            <Route exact={true} path="/versus" element={<VersusPage />} />
          </Routes>
        </Context.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
