import React, { Component } from "react";
import "./App.css";
import MovieForm from "./components/movieForm";
import DisplayMovie from "./components/displayMovie";

class App extends Component {
  state = {
    randomMovieUrl: null
  };

  setRandomMovieUrl = randomMovieUrl => {
    this.setState({ randomMovieUrl });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">Movie Roulette</header>
        <MovieForm setRandomMovieUrl={this.setRandomMovieUrl} />
        {this.state.randomMovieUrl && (
          <DisplayMovie randomMovieUrl={this.state.randomMovieUrl} />
        )}
      </div>
    );
  }
}

export default App;

// perfrom axios to get movie/ total pages here. then select a random page and display
// style movie button
