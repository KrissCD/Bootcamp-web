import React, { useState } from "react";

function Login({ onLogin }) {
  const [isUserRegistered, setIsUserRegistered] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim() && password.trim()) {
      onLogin(username);
    } else {
      alert("Please enter both username and password.");
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!username.trim() || !password.trim() || !confirmPassword.trim()) {
      alert("Please fill in all fields.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    setIsUserRegistered(true);
    alert("Registration successful! You can now log in.");
    setUsername("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="login-container">
      <h2>{isUserRegistered ? "Login" : "Register"}</h2>
      <form onSubmit={isUserRegistered ? handleLogin : handleRegister}>
        <div>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete={isUserRegistered ? "current-password" : "new-password"}
            />
          </label>
        </div>
        {!isUserRegistered && (
          <div>
            <label>
              Confirm Password:
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                autoComplete="new-password"
              />
            </label>
          </div>
        )}
        <button type="submit">{isUserRegistered ? "Login" : "Register"}</button>
      </form>
      <div style={{ marginTop: 10 }}>
        {isUserRegistered ? (
          <span>
            Not registered?{" "}
            <button type="button" onClick={() => setIsUserRegistered(false)}>
              Register
            </button>
          </span>
        ) : (
          <span>
            Already registered?{" "}
            <button type="button" onClick={() => setIsUserRegistered(true)}>
              Login
            </button>
          </span>
        )}
      </div>
    </div>
  );
}

export default Login;