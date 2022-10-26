import React, { useState } from "react";
import { Link } from "react-router-dom";

function LoginForm({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [errors, setErrors] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    
    fetch("http://127.0.0.1:3000/sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
   
    });
  }

  return (
    <div className="form-container">
      <div className="form-details">
        <h1>JS</h1>
        <h2>Please login to your account</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="email"
            id="email"
            name="email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            id="password"
            name="password"
          />
          <button type="submit" className="formButton">
            LogIn
          </button>
        </form>

        <h3>
          Don't have an account? <Link to="/register">Sign Up</Link>
        </h3>
      </div>
    </div>
  );
}
export default LoginForm;
