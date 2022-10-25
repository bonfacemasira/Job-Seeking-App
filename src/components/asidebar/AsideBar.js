import React from "react";
// import AsideBarCSS from "./AsideBar.module.css";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import LoginForm from "../LoginForm";

function AsideBar() {
  // const [open, setOpen] = useState(true);
  const { collapseSidebar, toggleSidebar, broken } = useProSidebar();
  return (
    <div style={{ display: "flex", height: "100%", minHeight: "400px" }}>
      <Sidebar customBreakPoint="700px" transitionDuration={1000}>
        <Menu>
          <MenuItem routerLink={<Link to="/dashboard" />}> Dashboard</MenuItem>
          <MenuItem routerLink={<Link to="/calendar" />}> Calendar</MenuItem>
          <MenuItem routerLink={<Link to="/e-commerce" />}>
            {" "}
            E-commerce
          </MenuItem>
        </Menu>
      </Sidebar>
      <main style={{ padding: "10" }}>
        <div>
          {broken ? (
            <button className="sb-button" onClick={() => toggleSidebar()}>
              Toggle
            </button>
          ) : (
            <button onClick={() => collapseSidebar()}>Collapse</button>
          )}
        </div>
        <LoginForm />
      </main>
    </div>
  );
}
export default AsideBar;
