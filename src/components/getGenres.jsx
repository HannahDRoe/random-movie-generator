import axios from "axios";
// import REACT_APP_MOVIE_API_KEY from "../../.env/apiKey";
export const getGenres = () => {
  const apiKey = process.env.REACT_APP_MOVIE_API_KEY;
  const url = "https://api.themoviedb.org/3/genre/movie/list?api_key=";
  const lang = "&language=en-us";
  const requestUrl = `${url}${apiKey}${lang}`;
  console.log(requestUrl);
  axios
    .get(requestUrl)
    .then(res => {
      const data = res.data.genres;
      return data;
    })
    .catch(error => console.error(error));
};
