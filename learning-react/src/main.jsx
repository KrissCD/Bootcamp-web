import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return (
    <div>
      <h1>Obožavam React i jsx</h1>
      <h2>Moja omiljena hrana</h2>
      <ul>
        <li>Slanina</li>
        <li>Banana</li>
        <li>Mango</li>
      </ul>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

