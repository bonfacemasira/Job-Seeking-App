import React from "react";
import DashboardCSS from "./Dashboard.module.css";


function Dashboard() {
  //fetch data from backend
  //comment out the image border on the images
  return (
    <>
      <div className={DashboardCSS.main}>
        <h1>Overview</h1>
        <div className={DashboardCSS.container}>
          <div className={DashboardCSS.column6}>
            <div className={DashboardCSS.fullwidth}>
              <div>JobSeekers</div>
              <div className={DashboardCSS.rate}>8%</div>
            </div>
            <div className={DashboardCSS.fullwidth}>
              <span>10,837</span>
            </div>
          </div>
          <div className={DashboardCSS.column6}>
            <div className={DashboardCSS.fullwidth}>
              <div>Employers</div>
              <div className={DashboardCSS.rate}>8%</div>
            </div>
            <div className={DashboardCSS.fullwidth}>
              <span>10,837</span>
            </div>
          </div>
        </div>
      </div>
      <div className={DashboardCSS.main}>
        <h1>Todays top employers</h1>
        <div className={DashboardCSS.images}>
          <div className={DashboardCSS.image}>
            <img src="#" alt="#" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Dashboard;