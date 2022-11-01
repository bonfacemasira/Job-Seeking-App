import "./App.css";
import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
// import Login from "./pages/Login";
import LoginForm from "./components/LoginForm";
import IdentityForm from "./components/IdentityForm";
// import VerificationForm from "./components/VerificationForm";
import { ProSidebarProvider } from "react-pro-sidebar";
import { Navigate } from "react-router-dom";
import AsideBar from "./components/asidebar/AsideBar";
import Finalization from "./components/Finalization";
import Home from "./components/Home";
import axios from "./api/Access";
// import EditProfile from "./pages/EditProfile";
// import UploadJob from "./components/Employer/UploadJob";
// import Job from "./components/jobs/job";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    axios.get("/users/me").then((r) => {
      setUser(r.data);
    });
  }, []);

  //navigate user
  function navigateUser() {
    if (!user) {
      return <Navigate replace to="/login" />;
    } else if (user && user.role === "admin") {
      return <Navigate replace to="/admin" />;
    } else if (user && user.role === "employer") {
      return <Navigate replace to="/employer" />;
    } else if (user && user.role === "job_seeker") {
      return <Navigate replace to="/job_seeker" />;
    }
  }

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
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route exact path="/job_seeker_profile" element={<IdentityForm />} />
        <Route exact path="/employer_profile" element={<Finalization />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
