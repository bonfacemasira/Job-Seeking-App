import React, { useState } from "react";

function RegisterForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
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
    <div className="auth-form-container">
      <h1>JS</h1>
      <h2>Please create a new account</h2>
        <form className="register-form" onSubmit={handleSubmit}>
        <input value={email} onChange={(e)=>setEmail(e.target.value)}type = "email" placeholder="Email" id="email" name="email" />
        <input value={number} onChange={(e)=>setNumber(e.target.value)}type = "number" placeholder="Phone Number" id="number" name="number" />
        <input value={password} onChange={(e)=>setPassword(e.target.value)}type = "password" placeholder="Password" id="password" name="password" />
        <input
            type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            placeholder="Confirm Password" 
            autoComplete="current-password"
            />
        <select>
      <option value="Job Seeker">Job Seeker</option>
      <option value="Employer">Employer</option>
       </select>
       <button type="submit" class="registerButton">Register</button> 
        </form>
        <h3>
        <span class="passwordField">Have an account?<a href="#">Login</a></span>
        </h3>

    </div>
  );
}

export default RegisterForm;