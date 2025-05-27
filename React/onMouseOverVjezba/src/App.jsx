import React, { useState } from 'react';

function NameForm() {
  const [hover, setHover] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '200px' }}>
      {submitted && <h2>Submitted</h2>}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your name" />
        <button
          type="submit"
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
          style={{
            backgroundColor: hover ? 'black' : 'white',
            color: hover ? 'white' : 'black',
            border: '1px solid black',
            marginLeft: '10px',
            padding: '10px 10px',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default NameForm;
