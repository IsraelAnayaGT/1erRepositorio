import React from "react";
import Header from "./Components/Header";
import Characters from "./Components/Characters";
import ThemeContext from "./context/ThemeContext";
import { useState } from "react";
import "./App.css";

function App() {
  const [theme, updateTheme] = useState("bgligth");
  return (
    <div className="App">
      <ThemeContext.Provider value={{ theme, updateTheme }}>
        <div className={"App " + theme}>
          <Header />
          <div className="container">
            <div className="col col-md-12">
              <Characters />
            </div>
          </div>
        </div>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
