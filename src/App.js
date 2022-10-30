import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import NavBar from "./components/NavBar";

// import Login from "./pages/Login";

import IdentityForm from "./components/IdentityForm";
import VerificationForm from "./components/VerificationForm";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import { ProSidebarProvider } from "react-pro-sidebar";
// import { useNavigate } from "react-router-dom";
import AsideBar from "./components/asidebar/AsideBar";
import EditProfile from "./pages/EditProfile";

import UploadJob from "./components/Employer/UploadJob";

import Job from "./components/jobs/job";

function App() {
  // const navigate = useNavigate();
  const [user, setUser] = useState(null);

  //to delete set user to admin

  useEffect(() => {
    // auto-login
    fetch("http://127.0.0.1:3000/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
      setUser("");
    });
  }, []);
  //navigate user
  function navigateUser() {
    if (!user) {
      return <Navigate to="/login" />;
    } else if (user.role === "admin") {
      return <Navigate to="/admin" />;
    } else if (user.role === "employer") {
      return <Navigate to="/employer" />;
    } else if (user.role === "jobSeeker") {
      return <Navigate to="/job_seeker" />;
    }
  }

  // a trial to check if user exists
  // i am using it to view the dashboard page

  // if (user === "admin")
  //   return (
  //     <ProSidebarProvider>
  //       <AsideBar />
  //     </ProSidebarProvider>
  //   );
  console.log("user", user);
  console.log("user role", user.role);
  // if (!user) {
  //   navigate.push("/login");
  // }
  if (!user) {
    return (
      <>
        {/* <Navigate to="/login" /> */}

        <NavBar user={user} />
        <Routes>
          <Route path="/login" element={<LoginForm onLogin={setUser} />} />
          <Route
            path="/register"
            element={<RegisterForm onLogin={setUser} />}
          />
          <Route path="/" element={navigateUser()} />
        </Routes>
      </>
    );
  }

  return (
    <div className="App">
      {user === "admin" ? (
        <ProSidebarProvider>
          <AsideBar />
        </ProSidebarProvider>
      ) : (
        <NavBar user={user} />
      )}
      <main>
        <Routes>
          <Route path="/login" element={<LoginForm onLogin={setUser} />} />
          <Route
            path="/register"
            element={<RegisterForm onLogin={setUser} />}
          />

          <Route path="/verify" element={<VerificationForm />} />
          <Route path="/confirm" element={<IdentityForm />} />
          <Route path="/" element={navigateUser()} />

          {/* jobseekers */}
          <Route path="/job_seekers/edit_profile" element={<EditProfile />} />
          <Route path="/job_seeker/job_offer" element={<Job />} />

          {/* employers */}
          <Route path="/employer/job_upload" element={<UploadJob />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
