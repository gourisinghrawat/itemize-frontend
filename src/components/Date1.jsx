import { useMemo } from "react";
import "./Date1.css";

const Date1 = ({ propFlex, propMinWidth, propWidth }) => {
  const dateStyle = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propFlex, propMinWidth, propWidth]);

  return (
    <div className="date" style={dateStyle}>
      <div className="background36" />
      <div className="data-comparer-plus-plus">
        <div className="date-picker-label-container">
          <span>
            <p className="april-7">April 7</p>
            <p className="p">2024</p>
          </span>
        </div>
      </div>
      <img
        className="calendar-number-icon"
        loading="lazy"
        alt=""
        src="/calendarnumber.svg"
      />
    </div>
  );
};

export default Date1;
