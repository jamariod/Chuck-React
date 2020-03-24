import React from "react";
import Quote from "./components/quote";
import Category from "./components/category";
import Refresh from "./components/refresh";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>CHUCK 2020 QUOTES!</h1>
      <Quote />
      <Category />
      <Refresh />
    </div>
  );
}

export default App;
