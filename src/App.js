import React from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header title="Recipe app" />
      <Search />
    </div>
  );
}

export default App;
