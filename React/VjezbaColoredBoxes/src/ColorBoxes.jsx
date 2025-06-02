import { useState } from 'react';

function getRandomHexColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function ColorBoxes() {
  const [colors, setColors] = useState(["#FF6384", "#36A2EB", "#FFCE56"]);

  const addRandomColor = () => {
    const newColor = getRandomHexColor();
    setColors([...colors, newColor]);
  };

  const removeLastColor = () => {
    if (colors.length === 0) return;
    setColors(colors.slice(0, -1));
  };

  const shuffleColors = () => {
    setColors(shuffleArray(colors));
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        {colors.map((color, index) => (
          <div
            key={index}
            style={{
              width: '100px',
              height: '100px',
              backgroundColor: color,
              border: '2px solid #2E8A99'
            }}
          ></div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={addRandomColor} style={buttonStyle}>Add Random Color</button>
        <button onClick={removeLastColor} style={buttonStyle}>Remove Last</button>
        <button onClick={shuffleColors} style={buttonStyle}>Shuffle</button>
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: '10px 20px',
  border: '2px solid #2E8A99',
  backgroundColor: 'black',
  cursor: 'pointer',
  fontWeight: 'bold'
};
