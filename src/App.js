import "./App.css";
import React, { useState, useEffect} from "react";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import RegisterForm from "./components/RegisterForm"
// import Login from "./pages/Login";
import LoginForm from "./components/LoginForm";
import IdentityForm from "./components/IdentityForm";
// import VerificationForm from "./components/VerificationForm";
import { ProSidebarProvider } from "react-pro-sidebar";
// import { useNavigate } from "react-router-dom";
import AsideBar from "./components/asidebar/AsideBar";

import Notifications from "./pages/Notifications";

// import UploadJob from "./components/Employer/UploadJob";

// import Job from "./components/jobs/job";

import Finalization from "./components/Finalization";
import Home from "./components/Home";
// import EditProfile from "./pages/EditProfile";


import UploadJob from "./components/Employer/UploadJob";

import Job from "./components/jobs/job";

function App() {
  
 
  const [user, setUser] = useState(null);

  // to delete set user to admin
  // useEffect(()=>{
  //   setUser("employer")
  // },[])


  useEffect(() => {
    // auto-login
    fetch("http://127.0.0.1:3000/users/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
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
    
  // useEffect(() => {
  //   fetch("").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);
  return (

  <div className="App">
    
        <NavBar user={user} setUser={setUser}/>
<Routes>
  <Route exact path='/job_seeker_profile' element={<IdentityForm/>}/>
  <Route exact path='/employer_profile' element={<Finalization/>}/>
  <Route exact path='/job_seeker_profile' element={<IdentityForm/>}/>
<Route exact path='/login' element={<LoginForm user={user} setUser={setUser}/>}/>
<Route exact path='/register' element={<RegisterForm/>}/>
<Route exact path='/' element={<Home/>}/>
</Routes>

   
    
  
    {/* <UploadJob /> */}
    {/* <VerificationForm /> */}

      <Notifications/>

      {/* <EditProfile/> */}


          {/* employers */}
          <Route path="/employer/job_upload" element={<UploadJob />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
