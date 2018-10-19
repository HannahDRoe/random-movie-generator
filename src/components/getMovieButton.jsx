import React from "react";

const GetMovieButton = ({ handleClick }) => {
  return <button onClick={() => handleClick()}>Fetch me a random movie</button>;
};

export default GetMovieButton;
