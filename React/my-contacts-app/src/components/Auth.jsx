import React, { useRef, useState } from "react";

function Auth({ onLogin }) {
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState("");
  const inputUser = useRef(null);
  const inputPass = useRef(null);
  const inputConfPass = useRef(null);

  // Hardcoded user for login demo
  const USER = "John";
  const PASS = "Doe";

  const handleLogin = () => {
    const username = inputUser.current.value;
    const password = inputPass.current.value;
    if (username === USER && password === PASS) {
      onLogin(username);
    } else {
      setError("Wrong username or password!");
    }
  };

  const handleRegister = () => {
    const username = inputUser.current.value;
    const password = inputPass.current.value;
    const confPass = inputConfPass.current.value;
    if (!username || !password || !confPass) {
      setError("Fill all fields!");
      return;
    }
    if (password !== confPass) {
      setError("Passwords do not match!");
      return;
    }
    // Registration logic (for demo, just allow login with this user)
    setError("Registered! Now log in with John/Doe.");
    setIsRegistering(false);
  };

  return (
    <div className="logInField">
      <h3>{isRegistering ? "Register" : "Log In"}</h3>
      <input className="inp" type="text" placeholder="Username" ref={inputUser} /><br />
      <input className="inp" type="password" placeholder="Password" ref={inputPass} /><br />
      {isRegistering && (
        <>
          <input className="inp" type="password" placeholder="Confirm Password" ref={inputConfPass} /><br />
        </>
      )}
      {error && <div style={{ color: "red" }}>{error}</div>}
      <button onClick={isRegistering ? handleRegister : handleLogin}>
        {isRegistering ? "Register" : "Log In"}
      </button>
      <button onClick={() => { setIsRegistering(!isRegistering); setError(""); }}>
        {isRegistering ? "Back to Login" : "Register"}
      </button>
    </div>
  );
}

export default Auth;