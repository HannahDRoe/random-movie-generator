import React, { Component } from "react";
import axios from "axios";

class DisplayMovie extends Component {
  state = {
    hasError: false,
    totalPages: null,
    randomPageNumber: null,
    moviesToChooseFrom: []
  };
  getRandomPageNumber = () => {
    const totalPages = this.state.totalPages;
    const min = 1;
    const max = Math.floor(totalPages);
    const randomPageNumber = Math.floor(Math.random() * (max - min) + min);
    this.setState({ randomPageNumber });
    console.log(randomPageNumber);
  };
  getRandomPageOfMovies = () => {
    const randomPageUrl = `${this.props.randomMovieUrl}&page=${
      this.state.randomPageNumber
    }`;
    axios
      .get(randomPageUrl)
      .then(res => this.setState({ moviesToChooseFrom: res.data.results }));
    return randomPageUrl;
  };
  getMovies = () => {
    const randomMovieUrl = this.props.randomMovieUrl;
    axios
      .get(randomMovieUrl)
      .then(res => {
        this.setState({ totalPages: res.data.total_pages });
      })
      .then(() => this.getRandomPageNumber())
      .then(() => this.getRandomPageOfMovies())

      .catch(error => this.setState({ hasError: true }));
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    if (this.state.hasError) return <div>Hmm... Something has gone wrong.</div>;
    if (this.state.totalPages <= 0)
      return <div> Wow. No one made a movie for your weird choices. </div>;

    return <div>{this.props.randomMovieUrl}</div>;
  }
}

export default DisplayMovie;
