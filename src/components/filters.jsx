import React, { Component } from "react";
import axios from "axios";
import SelectGenre from "./selectGenres";
import SelectYear from "./selectYear";
class MovieFilters extends Component {
  state = {
    genres: [],
    isLoading: false,
    error: null,
    selectedGenre: null,
    startYear: null,
    endYear: null
  };
  componentDidMount() {
    const apiKey = process.env.REACT_APP_MOVIE_API_KEY;
    const url = "https://api.themoviedb.org/3/genre/movie/list?api_key=";
    const lang = "&language=en-us";
    const requestUrl = `${url}${apiKey}${lang}`;
    console.log(requestUrl);
    this.setState({ isLoading: true });
    axios
      .get(requestUrl)
      .then(res => {
        const data = res.data.genres;
        this.setState({ genres: data, isLoading: false });
      })
      .catch(error =>
        this.setState({
          error,
          isLoading: false
        })
      );
  }
  handleStartYearChange = ({ currentTarget: years }) => {
    console.log(years.value);
    this.setState({
      startYear: years.value
    });
  };
  handleEndYearChange = ({ currentTarget: years }) => {
    this.setState({
      endYear: years.value
    });
  };
  handleGenreChange = ({ currentTarget: genre }) => {
    console.log(genre.value);
    // this.setState({
    //   selectedGenre: genre
    // });
  };
  render() {
    const { genres, isLoading, error, startYear } = this.state;
    if (error) {
      return <p>{error.message}</p>;
    }
    if (isLoading) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <SelectYear
          handleStartYearChange={this.handleStartYearChange}
          handleEndYearChange={this.handleEndYearChange}
          startYear={startYear}
        />
        <SelectGenre genres={genres} handleChange={this.handleGenreChange} />
      </div>
    );
  }
}

export default MovieFilters;
