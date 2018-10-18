import React, { Component } from "react";
import "./App.css";
import MovieFilters from "./components/filters";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">Movie Roulette</header>
        <MovieFilters />
      </div>
    );
  }
}

export default App;
