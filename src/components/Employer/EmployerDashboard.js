import React, {useState} from "react";
import {FaSistrix} from "react-icons/fa";
import './EmployerDashboard.css';


function EmployerDashboard(){
    const [search, setSearch] = useState("");

    const onChange = (e) => {
        setSearch(e.target.value);
    }

    const onSearch = (searchTearm) => {
        setSearch(searchTearm);
        //api fetch request
        console.log("search", searchTearm);
    }
    return(
        <div className="talents">
            <h2>Get Employees</h2>
            <p>Find your next employee</p>

            <form className="search-form">
                <input 
                        type="text" 
                        placeholder="Job title or keyword" 
                        value={search} 
                        onChange={onChange}
                    />
                    <input
                        type="text"
                        placeholder="Country or timezone"
                        value={search}
                        onChange={onChange}
                    />
                    <br />
                    <select>
                        <option value="0">Salary</option>
                        <option value="1">50k - 70k</option>
                        <option value="2">50k - 80k</option>
                        <option value="3">100k +</option>
                    </select>
                    <select>
                        <option value="0">Type of work</option>
                        <option value="1">Full time</option>
                        <option value="2">Part time</option>
                        <option value="3">Contract</option>
                        <option value="4">Remote</option>
                        <option value="5">On-Site</option>
                    </select>
            </form>
            <div className="btn">
                <button className="reset-all" onClick={() => onSearch(search)}>ClearAll</button>
                <button className="search-btn" onClick={() => onSearch(search)}>Search</button>
            </div>
        </div>
    )

}
export default EmployerDashboard;