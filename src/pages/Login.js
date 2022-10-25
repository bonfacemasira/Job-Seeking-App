import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import Dashboard from "../components/dashboard/Dashboard";

function Login() {
  return (
    <main>
      <Routes>
        <Route path="/login" element={ <LoginForm /> } />
        <Route path="/register" element={ <RegisterForm/> } />
        <Route path="/dashboard" element={ <Dashboard/> } />
      </Routes>
    </main>
  );
}

export default Login;