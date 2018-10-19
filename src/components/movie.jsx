import React from "react";
const Movie = ({ title, posterPath, overview, releaseDate }) => {
  const image = () => {
    if (posterPath)
      return (
        <img src={`https://image.tmdb.org/t/p/w200/${posterPath}`} alt="" />
      );
  };
  const formatReleaseDate = () => {
    const date = new Date(releaseDate);
    console.log(releaseDate);
    const formattedDate = date.getFullYear();
    return formattedDate;
  };
  return (
    <div>
      <h3>{title}</h3>
      <h5>{formatReleaseDate()}</h5>
      {image()}
      <p id="movieOverview">{overview}</p>
    </div>
  );
};

export default Movie;
