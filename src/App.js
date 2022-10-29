import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";

import Login from "./pages/Login";

import IdentityForm from "./components/IdentityForm";
import VerificationForm from "./components/VerificationForm";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import { ProSidebarProvider } from "react-pro-sidebar";
import AsideBar from "./components/asidebar/AsideBar";
import EditProfile from "./pages/EditProfile";

import Dashboard from "./pages/Dashboard";
import Employers from "./pages/Employers";
import JobSeekers from "./pages/JobSeekers";

import UploadJob from "./components/Employer/UploadJob";

import Job from "./components/jobs/job";

function App() {
  const [user, setUser] = useState(null);

  //to delete set user to admin
  useEffect(() => {
    setUser("employer");
  }, []);

  useEffect(() => {
    // auto-login
    fetch("http://127.0.0.1:3000/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
  // a trial to check if user exists
  // i am using it to view the dashboard page

  if (user === "admin")
    return (
      <ProSidebarProvider>
        <AsideBar />
      </ProSidebarProvider>
    );

  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/job_seekers" element={<JobSeekers />} />
          <Route path="/employers" element={<Employers />} />
        </Routes>
      </main>
      {/* <Login /> */}
      {/* <UploadJob /> */}
      {/* <VerificationForm /> */}
      {/* <EditProfile/> */}

      {/* <IdentityForm /> */}
    </div>
  );
}

export default App;
