import React from "react";

const SelectGenre = ({ genres, handleChange }) => {
  return (
    <select onChange={e => handleChange(e)}>
      <option value="">Choose Genre</option>
      {genres.map(genre => {
        return (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        );
      })}
    </select>
  );
};

export default SelectGenre;
