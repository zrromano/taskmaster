import React from "react";
import "../calender.css";
import Select from "./common/select"

const Calender = () => {

  let months = [
    {_id:1 , name: "January"},
    {_id:2 , name: "February"},
    {_id:3 , name: "March"},
    {_id:4 , name: "April"},
    {_id:5 , name: "May"},
    {_id:6 , name: "June"},
    {_id:7 , name: "July"},
    {_id:8 , name: "August"},
    {_id:9 , name: "September"},
    {_id:10 , name: "October"},
    {_id:11 , name: "November"},
    {_id:12 , name: "December"}
  ]

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className="calendar" id="calendar">

        <div className="dropdowns">
          <div class="calendar-btn month-dropdown">
            <td> <p>Month: </p> </td>
            <td> <Select options= {months}/> </td>
          </div>
        </div>

      
      <div className="clear"></div>

      <div className="calendar-dates">
        <table>
          <div className="days">
              <div className="day label">SUN</div>
              <div className="day label">MON</div>
              <div className="day label">TUE</div>
              <div className="day label">WED</div>
              <div className="day label">THUR</div>
              <div className="day label">FRI</div>
              <div className="day label">SAT</div>

              <div className="clear"></div>
          </div>
        </table>

          <div id="calendarDays" className="days">
          </div>
      </div>
    </div>
);
};




export default Calender;
