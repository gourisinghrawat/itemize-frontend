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
  const today = new Date();
  const month = today.getMonth()+1;
const year = today.getFullYear();
const date = today. getDate();
const wmonth = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const md=wmonth[month-1]+" "+date;

  return (
    <div className="date" style={dateStyle}>
      <div className="background36" />
      <div className="data-comparer-plus-plus">
        <div className="date-picker-label-container">
          <span>
            <p className="april-7">{md}</p>
            <p className="p">{year}</p>
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
