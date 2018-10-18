import React from "react";

const SelectItems = ({ title, handleChange, items }) => {
  return (
    <React.Fragment>
      <label htmlFor={title} />
      <select onChange={e => handleChange(e)}>
        <option value="SelectYear">{title}</option>
        {items.map(item => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </React.Fragment>
  );
};

export default SelectItems;
