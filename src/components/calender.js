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
    <div class="calendar" id="calendar">
      <div class="calendar-btn month-btn">
         <Select options= {months}/>
      </div>

      <div class="clear"></div>

      <div class="calendar-dates">
          <div class="days">
              <div class="day label">SUN</div>
              <div class="day label">MON</div>
              <div class="day label">TUE</div>
              <div class="day label">WED</div>
              <div class="day label">THUR</div>
              <div class="day label">FRI</div>
              <div class="day label">SAT</div>

              <div class="clear"></div>
          </div>

          <div id="calendarDays" class="days">
          </div>
      </div>
    </div>
);
};




export default Calender;
