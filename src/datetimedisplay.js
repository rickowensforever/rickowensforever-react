// DateTimeDisplay.js
import React, { useState, useEffect } from 'react';
import './datetimedisplay.css';

const DateTimeDisplay = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const dateOptions = {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  };

  const timeOptions = {
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short',
    hour12: false,
  };

  const formattedDate = currentDateTime
    .toLocaleString('en-US', dateOptions)
    .replace(/[,/]/g, '·');

  const formattedTime = currentDateTime
    .toLocaleString('en-US', timeOptions)
    .replace(/[,/]/g, '·');

  return (
    <div className="datetimedisplay">
      <p className="date">{formattedDate}</p>
      <p className="time">{formattedTime}</p>
    </div>
  );
};

export default DateTimeDisplay;
