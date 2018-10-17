import React from "react";

const SelectYear = ({
  handleStartYearChange,
  handleEndYearChange,
  startYear
}) => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const fillRange = (start, end) => {
    return Array(end - start + 1)
      .fill()
      .map((item, index) => start + index);
  };

  const allYears = fillRange(1920, currentYear);
  const findEndYearsRange = () => {
    if (!startYear) return;
    const startYearNum = Number(startYear);
    return fillRange(startYearNum, currentYear);
  };
  const endYears = findEndYearsRange();
  console.log(endYears);
  return (
    <div>
      <h4>Select the years you want your movie from</h4>
      <label htmlFor="Start Year" />
      <select onChange={e => handleStartYearChange(e)}>
        <option value="SelectYear">Start Year</option>
        {allYears.map(year => {
          return <option value={year}>{year}</option>;
        })}
      </select>
      {startYear && (
        <React.Fragment>
          <label htmlFor="End Year" />
          <select onChange={e => handleEndYearChange(e)}>
            <option value="SelectYear">End Year</option>
            {endYears.map(year => {
              return <option value={year}>{year}</option>;
            })}
          </select>
        </React.Fragment>
      )}
    </div>
  );
};
export default SelectYear;
