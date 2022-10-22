import React, { useState } from "react";
import { Link } from "react-router-dom";

function RegisterForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        password_confirmation: passwordConfirmation,
        number,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div className="form-container">
      <div className="form-details">
        <h1>JS</h1>
        <h2>Please create a new account</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="✉️ Email"
            id="email"
            name="email"
          />
          <input
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            type="number"
            placeholder="☏ Phone Number"
            id="number"
            name="number"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="🔓 Password"
            id="password"
            name="password"
          />
          <input
            type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            placeholder="🔓 Confirm Password"
            autoComplete="current-password"
          />
          <select>
            <option value="Job Seeker">⇩ Job Seeker</option>
            <option value="Employer">⇩ Employer</option>
          </select>
          <button type="submit" className="formButton">
            Sign Up
          </button>
        </form>
        <h3>
          <span class="passwordField">
            Already have an account? <Link to="/login">Login</Link>
          </span>
        </h3>
      </div>
    </div>
  );
}

export default RegisterForm;
