import React, { useEffect, useState } from 'react';
import './App.css'; // CSS stilovi

function App() {
  const [message, setMessage] = useState('');
  const [style, setStyle] = useState({});

  useEffect(() => {
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 0 && hour < 12) {
      setMessage('Good morning');
      setStyle({ color: 'red' });
    } else if (hour >= 12 && hour < 18) {
      setMessage('Good afternoon');
      setStyle({ color: 'green' });
    } else {
      setMessage('Good evening');
      setStyle({ color: 'blue' });
    }
  }, []);

  return (
    <div className="App">
      <h1 className="heading" style={style}>{message}</h1>
    </div>
  );
}

export default App;
