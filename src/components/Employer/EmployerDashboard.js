import React, {useState} from "react";
import {FaSistrix} from "react-icons/fa";
import './EmployerDashboard.css';


function EmployerDashboard(){
    const [search, setSearch] = useState("");
    // const [talent, setTalent] = useState("");

    const onChange = (e) => {
        setSearch(e.target.value);
    }

    const onSearch = (searchTearm) => {
        setSearch(searchTearm);
        //api fetch request
        console.log("search", searchTearm);
    }

    // useEffect(() => {
    //     //api fetch request
    //     console.log("search", search);
    // }, [search]);

   
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
            
            {/* <div className="dropdown">
                {employee 
                    .filter((item) => {
                        const searchTearm = search.toLowerCase();
                        const jobTitle = item.jobTitle.toLowerCase();
                        // const country = item.country.toLowerCase();

                        return(
                            searchTearm && 
                            jobTitle.startsWith(searchTearm) &&
                            jobTitle !== searchTearm
                        )
                    })
                    .slice(0, 7)
                    .map((item) => (
                        <div 
                            onClick={() => onSearch(item.jobTitle)}
                            key={item.jobTitle}
                            className="dropdown-row"
                        >
                            {item.jobTitle}
                        </div>
                    ))
                }
            </div> */}
            <div className="btn">
                <button className="reset-all" onClick={() => onSearch(search)}>ClearAll</button>
                <button className="search-btn" onClick={() => onSearch(search)}>Search</button>
            </div>

            <div className="talent">
                {/* {talent.map((item) => (
                    <div className="talent-row" key={item.id}>
                        <div className="talent-row-left">
                            <img src={item.image} alt="talent" />
                            <div className="talent-row-left-info">
                                <h3>{item.full_name}</h3>
                                <p>{item.jobTitle}</p>
                                <p>{item.availability}</p>
                                <p>{item.salary_expectation}</p>
                                <p>{item.country}</p>
                                <p>{item.certificates}</p>
                                <p>{item.cv}</p>
                            </div>
                        </div>
                    </div>
                ))} */}
            </div>
        </div>
    )

}
export default EmployerDashboard;