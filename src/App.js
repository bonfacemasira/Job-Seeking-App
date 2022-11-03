import "./App.css";
import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
// import Login from "./pages/Login";
import LoginForm from "./components/LoginForm";
import EmployerForm from "./components/EmployerForm";
import IdentityForm from "./components/IdentityForm";
// import VerificationForm from "./components/VerificationForm";
import { ProSidebarProvider } from "react-pro-sidebar";
import { Navigate } from "react-router-dom";
import AsideBar from "./components/asidebar/AsideBar";
import Notifications from "./pages/Notifications";
// import UploadJob from "./components/Employer/UploadJob";
// import Job from "./components/jobs/job";
import Finalization from "./components/Finalization";
// import Home from "./components/Home";
import axios from "./api/Access";
// import EditProfile from "./pages/EditProfile";
import UploadJob from "./components/Employer/UploadJob";
// import Job from "./components/jobs/job";
// import UploadJob from "./components/Employer/UploadJob";
import VerificationForm from "./components/VerificationForm";
import PaymentForm from "./components/PaymentForm";
import Dashboard from "./pages/Dashboard";
import Employers from "./pages/Employers";
import JobSeekers from "./pages/JobSeekers";
import Card from "./components/Card";

function App() {
  const [user, setUser] = useState(null);
  const [jobSeekerData, setJobSeekerData] = useState([]);


  useEffect(() => {
    // auto-login
    axios.get("/users/me").then((r) => {
      setUser(r.data);
    });
  }, []);

  return (
    <div className="App">
      <NavBar user={user} setUser={setUser} />
      
        <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route exact path="/job_seeker_profile" element={<IdentityForm />} />
        <Route exact path="/payment_form" element={<PaymentForm />} />
        <Route exact path="/employer_profile" element={<EmployerForm />} />
        <Route exact path="/finalization" element={<Finalization />} />
        <Route
          exact
          path="/admin_dashboard"
          element={
            <ProSidebarProvider>
              <AsideBar />
            </ProSidebarProvider>
          }
        />
        <Route exact path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employers" element={<Employers />} />
        <Route path="/job_seekers" element={<JobSeekers />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </div>
  );
}


export default App;
