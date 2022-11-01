import axios from "../api/Access";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function RegisterForm({ setUser }) {
  const options = [
    { name: 1, value: "job_seeker" },
    { name: 2, value: "employer" },
  ];

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [role, setRole] = useState(options[0].value);
  // const [errors, setErrors] = useState("");
  // const [isLoading, setIsLoading] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // setErrors([]);
    // setIsLoading(true);
    axios
      .post("/users/signup", {
        email: email,
        password: password,
        password_confirmation: password_confirmation,
        username: username,
        role: role,
      })
      .then((r) => {
        localStorage.setItem("user", JSON.stringify(r.data.user));
        localStorage.setItem("token", JSON.stringify(r.data.token));
        localStorage.setItem("authenticated", JSON.stringify(true));
        if (r.data.role === "job_seeker") {
          navigate("/job_seeker_profile");
        } else {
          navigate("/employer_profile");
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Username"
            id="username"
            name="username"
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
            value={password_confirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            placeholder="🔓 Confirm Password"
            autoComplete="current-password"
          />
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.value}{" "}
              </option>
            ))}
          </select>
          <button type="submit" className="formButton" onClick={handleSubmit}>
            Sign Up
          </button>
        </form>
        <h3>
          <span className="passwordField">
            Already have an account? <Link to="/login">Login</Link>
          </span>
        </h3>
      </div>
    </div>
  );
}

export default RegisterForm;
