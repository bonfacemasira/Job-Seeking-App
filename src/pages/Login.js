import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

function Login() {
  return (
    <main>
      <Routes>
        <Route path="/login" element={ <LoginForm /> } />
        <Route path="/register" element={ <RegisterForm/> } />
      </Routes>
    </main>
  );
}

export default Login;