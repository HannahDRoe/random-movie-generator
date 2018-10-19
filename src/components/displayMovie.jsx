import React, { Component } from "react";
import axios from "axios";
import Movie from "./movie";

class DisplayMovie extends Component {
  state = {
    hasError: false,
    totalPages: null,
    randomPageNumber: null,
    moviesToChooseFrom: [],
    selectedMovie: null
  };

  setRandomPageNumber = () => {
    const min = 1;
    const max = Math.floor(this.state.totalPages);
    const randomPageNumber = Math.floor(Math.random() * (max - min) + min);
    this.setState({ randomPageNumber });
  };

  getRandomPageOfMovies = () => {
    const randomPageUrl = `${this.props.randomMovieUrl}&page=${
      this.state.randomPageNumber
    }`;
    axios
      .get(randomPageUrl)
      .then(res => this.setState({ moviesToChooseFrom: res.data.results }))
      .then(() => this.selectMovieFromResults());
  };
  getMovies = () => {
    const randomMovieUrl = this.props.randomMovieUrl;
    axios
      .get(randomMovieUrl)
      .then(res => {
        this.setState({ totalPages: res.data.total_pages });
      })
      .then(() => this.setRandomPageNumber())
      .then(() => this.getRandomPageOfMovies())
      .then(this.selectMovieFromResults())
      .catch(error => this.setState({ hasError: true }));
  };
  selectMovieFromResults = () => {
    const moviesToChooseFrom = this.state.moviesToChooseFrom;
    const selectedMovie =
      moviesToChooseFrom[Math.floor(Math.random() * moviesToChooseFrom.length)];
    this.setState({ selectedMovie });
    return selectedMovie;
  };

  componentDidMount() {
    this.getMovies();
  }
  movie = () => {
    if (this.state.selectedMovie) {
      return (
        <Movie
          title={this.state.selectedMovie.title}
          posterPath={this.state.selectedMovie.poster_path}
          overview={this.state.selectedMovie.overview}
          releaseDate={this.state.selectedMovie.release_date}
        />
      );
    }
    if (this.state.hasError) return <div>Hmm... Something has gone wrong.</div>;
    if (this.state.totalPages <= 0 && this.state.totalPages !== null)
      return <div> Wow. No one made a movie for your weird choices. </div>;
  };
  render() {
    return (
      <div>
        <button onClick={() => this.getMovies()}>Try Again</button>
        {this.movie()}
      </div>
    );
  }
}

export default DisplayMovie;
