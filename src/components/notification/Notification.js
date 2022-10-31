import React from "react";
import NotificationCSS from "./Notification.module.css";
function Notification() {
  return (
    <>
      <div className={NotificationCSS.container}>
        <div className={NotificationCSS.timed}>
          <div className={NotificationCSS.time}>3:30 PM</div>
          <div className={NotificationCSS.duration}>30 minutes</div>
        </div>
        <div className={NotificationCSS.title}>
          <div className={NotificationCSS.profile}>
            <img src="#" alt="profile" />
          </div>
          <div className={NotificationCSS.details}>
            <div className={NotificationCSS.name}>Meghan Smith</div>
            <div className={NotificationCSS.job}>Job Seeker</div>
          </div>
        </div>
        <div className={NotificationCSS.date}>
          <div className={NotificationCSS.date_received}>September 10th</div>
          <div className={NotificationCSS.statusPending}>
            <span className={NotificationCSS.pending}></span>
            Pending
          </div>
        </div>
      </div>

      {/* to delete later  */}
      <div className={NotificationCSS.container}>
        <div className={NotificationCSS.timed}>
          <div className={NotificationCSS.time}>3:30 PM</div>
          <div className={NotificationCSS.duration}>30 minutes</div>
        </div>
        <div className={NotificationCSS.title}>
          <div className={NotificationCSS.profile}>
            <img src="#" alt="profile" />
          </div>
          <div className={NotificationCSS.details}>
            <div className={NotificationCSS.name}>Meghan Smith</div>
            <div className={NotificationCSS.job}>Job Seeker</div>
          </div>
        </div>
        <div className={NotificationCSS.date}>
          <div className={NotificationCSS.date_received}>September 10th</div>
          <div className={NotificationCSS.statusPending}>
            <span className={NotificationCSS.pending}></span>
            Pending
          </div>
        </div>
      </div>
    </>
  );
}
export default Notification;
