import React from "react";
import './UploadJob.css';


function UploadJob(){
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
                        <input type="text" id="job-title" name="job-title" placeholder="Job Title" />
                        <input type="text" id="job-type" name="job-type" placeholder="Job Type" />
                        <textarea name="" id="" cols="30" rows="10" placeholder="Job Description...">
                            
                        </textarea>
                        <input type="text" id="tags" placeholder="Tags" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UploadJob;