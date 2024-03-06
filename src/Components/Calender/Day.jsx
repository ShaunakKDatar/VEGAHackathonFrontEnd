import React from "react";
import moment from "moment";

const Day = ({ date, selectedDate }) => {
  const isSelected = moment(date).isSame(selectedDate, "day");

  return (
    <div className={`day ${isSelected ? "selected" : ""}`}>
      <span>{date.format("D")}</span>
    </div>
  );
};

export default Day;