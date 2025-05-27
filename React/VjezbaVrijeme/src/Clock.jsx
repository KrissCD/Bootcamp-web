import React, { useState } from 'react';

function Clock() {
  const [currentTime, setCurrentTime] = useState('');

  const showCurrentTime = () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString('hr-HR', { hour12: false });
    setCurrentTime(timeString);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{currentTime}</h1>
      <button id="get-time-btn" onClick={showCurrentTime}>
        Get Time
      </button>
    </div>
  );
}

export default Clock;
