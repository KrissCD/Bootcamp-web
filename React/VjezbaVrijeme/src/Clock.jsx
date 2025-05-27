import { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState('');

  const updateTime = () => setTime(new Date().toLocaleTimeString('hr-HR', { hour12: false }));

  useEffect(() => {
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1>{time}</h1>
      <button id="get-time-btn" onClick={updateTime}>Get Time</button>
    </>
  );
}

export default Clock;
