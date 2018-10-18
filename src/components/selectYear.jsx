import React from "react";
import SelectItems from "./selectItems";

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
      .map((__items, index) => start + index);
  };

  const findEndYearsRange = () => {
    if (!startYear) return;
    const startYearNum = Number(startYear);
    return fillRange(startYearNum, currentYear);
  };
  const allYears = fillRange(1920, currentYear);
  const endYears = findEndYearsRange();
  return (
    <div>
      <h4>Select the years you want your movie from</h4>
      <SelectItems
        title={"Start Year"}
        handleChange={handleStartYearChange}
        items={allYears}
      />
      {startYear && (
        <SelectItems
          title={"End Year"}
          handleChange={handleEndYearChange}
          items={endYears}
        />
      )}
    </div>
  );
};
export default SelectYear;
