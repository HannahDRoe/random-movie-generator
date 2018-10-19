import React, { Component } from "react";
import axios from "axios";
import SelectGenre from "./selectGenres";
import SelectYear from "./selectYear";
import GetMovieButton from "./getMovieButton";

class MovieForm extends Component {
  // constructor(props) {
  //   super(props);
  // }
  state = {
    genres: [],
    isLoading: false,
    error: null,
    selectedGenre: "",
    startYear: "",
    endYear: ""
  };
  getApiKey = () => {
    return process.env.REACT_APP_MOVIE_API_KEY;
  };
  componentDidMount() {
    const apiKey = this.getApiKey();
    const genreUrl = "https://api.themoviedb.org/3/genre/movie/list?api_key=";
    const lang = "&language=en-us";
    const requestUrl = `${genreUrl}${apiKey}${lang}`;
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
    this.setState({
      selectedGenre: genre.value
    });
  };
  createRandomMovieURl = () => {
    const apiKey = this.getApiKey();
    const url = "https://api.themoviedb.org/3/discover/movie?api_key=";
    const lang = "&language=en-us";
    const { selectedGenre, startYear, endYear } = this.state;
    const requestUrl = `${url}${apiKey}${lang}&with_genres=${selectedGenre}&include_adult=false&include_video=false&page=1&release_date.gte=${startYear}&release_date.lte=${endYear}`;
    this.props.setRandomMovieUrl(requestUrl);
    console.log(requestUrl);
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
        <div>
          <SelectYear
            handleStartYearChange={this.handleStartYearChange}
            handleEndYearChange={this.handleEndYearChange}
            startYear={startYear}
          />
          <SelectGenre genres={genres} handleChange={this.handleGenreChange} />
        </div>
        <GetMovieButton handleClick={this.createRandomMovieURl} />
      </div>
    );
  }
}

export default MovieForm;
