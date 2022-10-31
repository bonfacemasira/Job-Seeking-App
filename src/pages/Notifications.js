import React from "react";
import Notification from "../components/notification/Notification";
import NotificationsCSS from "./Notifications.module.css"
function Employers() {
  return (
    <div className={NotificationsCSS.main}>
      <Notification />
    </div>
  );
}
export default Employers;