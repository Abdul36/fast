import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function CalendarComponent() {
  const [date, setDate] = useState(new Date());
  const [timeZone, setTimeZone] = useState("UTC");

  const onChange = (newDate) => {
    setDate(newDate);
  };

  const handleTimeZoneChange = (event) => {
    setTimeZone(event.target.value);
  };

  return (
    <div>
      <h2>Calendar</h2>
      <div>
        <Calendar onChange={onChange} value={date} />
      </div>
      <div>Selected Date: {date.toDateString()}</div>
      <div>
        <label>Select Timezone:</label>
        <select value={timeZone} onChange={handleTimeZoneChange}>
          <option value="UTC">UTC</option>
          <option value="America/New_York">America/New York</option>
          <option value="Europe/London">Europe/London</option>
          <option value="Asia/Tokyo">Asia/Tokyo</option>
          {/* Add more timezones as needed */}
        </select>
      </div>
    </div>
  );
}

export default CalendarComponent;
