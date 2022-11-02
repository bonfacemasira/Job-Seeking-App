import React from "react";
// import AsideBarCSS from "./AsideBar.module.css";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Link } from "react-router-dom";
// import LoginForm from "../LoginForm";
import NavBar from "../NavBar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import Employers from "../../pages/Employers";
import JobSeekers from "../../pages/JobSeekers";

function AsideBar() {
  // const [open, setOpen] = useState(true);
  const { collapseSidebar, toggleSidebar, broken } = useProSidebar();
  return (
    <div style={{ display: "flex", height: "100%", minHeight: "400px" }}>
      <Sidebar customBreakPoint="700px" transitionDuration={1000}>
        <Menu>
          <MenuItem routerLink={<Link to="/dashboard" />}> Dashboard</MenuItem>
          <MenuItem routerLink={<Link to="/employers" />}> Employers</MenuItem>
          <MenuItem routerLink={<Link to="/job_seekers" />}>
            {" "}
            Job Seekers
          </MenuItem>
        </Menu>
      </Sidebar>
      <main style={{ padding: "10", width: "100%" }}>
        {/* <NavBar /> */}
        <div>
          {broken ? (
            <button className="sb-button" onClick={() => toggleSidebar()}>
              Toggle
            </button>
          ) : (
            <button onClick={() => collapseSidebar()}>Collapse</button>
          )}
        </div>
        {/* admin */}
        {/* <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employers" element={<Employers />} />
          <Route path="/job_seekers" element={<JobSeekers />} />
        </Routes> */}
      </main>
    </div>
  );
}
export default AsideBar;
