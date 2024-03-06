import React from "react";

const Header = ({ currentMonth, onPrevMonth, onNextMonth }) => {
  return (
    <div className="header">
      <button onClick={onPrevMonth}>Previous Month</button>
      <h2>{currentMonth}</h2>
      <button onClick={onNextMonth}>Next Month</button>
    </div>
  );
};

export default Header;