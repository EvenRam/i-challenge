import React, { useState } from 'react';
import { Calendar } from 'primereact/calendar';


const HabitTrackerCalendar = () => {
  const [completedDates, setCompletedDates] = useState([]);

  const handleDateClick = (date) => {
    // Toggle completion status of the clicked date
    const updatedDates = [...completedDates];
    const dateStr = date.toISOString().split('T')[0]; // Get YYYY-MM-DD format
    const index = updatedDates.indexOf(dateStr);
    if (index === -1) {
      updatedDates.push(dateStr); // Add if not completed
    } else {
      updatedDates.splice(index, 1); // Remove if already completed
    }
    setCompletedDates(updatedDates);
  };

  const tileClassName = ({ date }) => {
    // Customize the CSS class based on completion status
    const dateStr = date.toISOString().split('T')[0]; // Get YYYY-MM-DD format
    return completedDates.includes(dateStr) ? 'completed' : null;
  };

  return (
    <div>
      <h2>Habit Tracker Calendar</h2>
      <Calendar
        onChange={handleDateClick} // Use onChange instead of onClickDay
        className={tileClassName}
      />
    </div>
  );
};

export default HabitTrackerCalendar;
