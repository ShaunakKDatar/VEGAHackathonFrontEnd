import React from "react";
import Day from "./Day";
import moment from "moment";

const Body = ({ selectedDate }) => {
  const startOfWeek = moment(selectedDate).startOf("week");
  const endOfWeek = moment(selectedDate).endOf("week");

  const days = [];
  for (let day = startOfWeek; day.isSameOrBefore(endOfWeek); day.add(1, "day")) {
    days.push(<Day key={day.format("YYYY-MM-DD")} date={day} selectedDate={selectedDate} />);
  }

  return (
    <div className="body">
      <div className="days">
        {moment.weekdaysShort().map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
      <div className="dates">{days}</div>
    </div>
  );
};

export default Body;