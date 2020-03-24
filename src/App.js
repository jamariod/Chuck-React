import React from "react";
import Quote from "./components/quote";
import Category from "./components/category";
import Refresh from "./components/refresh";
import "./App.css";

export default function App() {
  const TheQuote = "Chuck can hear sign language";
  return (
    <div className="App">
      <h1>CHUCK 2020 QUOTES!</h1>
      <Quote quote={TheQuote} />
      <Category />
      <Refresh />
    </div>
  );
}
