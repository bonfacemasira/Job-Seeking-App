import React, { useState } from "react";

function AsideBar() {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div class="sidebar">
        <ul class="nav-links">
        <span class="link_name">Dashboard</span>
        </ul>
      </div>
    </>
  );
}
export default AsideBar;
