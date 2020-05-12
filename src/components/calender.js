import React from "react";

const Calender = () => {
  

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
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
      <div class="calendar-btn month-btn" onclick="$('#months').toggle('fast')">
          <span id="curMonth"></span>
          <div id="months" class="months dropdown"></div>
      </div>

      <div class="calendar-btn year-btn" onclick="$('#years').toggle('fast')">
          <span id="curYear"></span>
          <div id="years" class="years dropdown"></div>
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
