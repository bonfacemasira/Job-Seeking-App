import React, { useState } from "react";
import "./UploadJob.css";

import RichText from "./RichText";

function UploadJob() {
  //set value from rich text
  const [value, setValue] = useState("");

  return (
    <div>
      <div className="action-btn">
        <select>
          <option value="0">English</option>
          <option value="1">French</option>
          <option value="2">Spanish</option>
        </select>
        <button className="prev-btn">Preview</button>
        <button className="pub-btn">Publish</button>
      </div>
      <div className="job-form">
        <form>
          <div className="form-group">
            <input
              type="text"
              id="job-title"
              name="job-title"
              placeholder="Job Title"
            />
            <input
              type="text"
              id="job-type"
              name="job-type"
              placeholder="Job Type"
            />
            <RichText setValue={setValue} value={value} />
            <input type="text" id="tags" placeholder="Tags" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default UploadJob;

