import React, { useState } from "react";
import Login from "./Components/Login";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      {!user ? (
        <Login onLogin={setUser} />
      ) : (
        <div>
          <h1>Welcome, {user}!</h1>
        </div>
      )}
    </div>
  );
}

export default App;