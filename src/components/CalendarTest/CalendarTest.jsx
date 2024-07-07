import React, { useState } from 'react';
import { Calendar } from 'primereact/calendar';


const HabitTrackerCalendar = () => {


  const [startDate, setStartDate] = useState([]);
  const [endDate, setEndDate] = useState([]);


  return (
    <>

      <div className="card flex justify-content-center">
        <Calendar value={startDate} onChange={(event) => setStartDate(event.value)} />
      </div>

      <div className="card flex justify-content-center">
        <Calendar value={endDate} onChange={(event) => setEndDate(event.value)} />
      </div>
    </>
  )

};

export default HabitTrackerCalendar;
