import React from "react";


function Job() {
    return (
        <section className="section">

            <div className="right">
                <div className="align-left">
                <div className="image">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvTh-soG49NeQyJP4j53Fm9w-mODXs6plBmmr_aQhhVFQ4dtfZMIgI0u4FU7Cp9vSsSfI&usqp=CAU"/>
                    </div>
                    <div className="location">
                    <h3 className="header2">Safaricom </h3>
                    <h3 className="header2"> Nairobi </h3>

               </div>
                </div>
             <div className="left"> 
             <div className="information">
             <h1 className="header">   peronal assistant </h1>
             <span>
             <i class="cis-lock-locked"></i>
             </span>
             </div>
             <div className="summary">
                 <h1 className="header"> Job summary </h1>
                 <p className="header4"> I am an experienced professional seeking an opportunity to use my background in data analysis and market trend research.<br/> I am a dedicated and detail-oriented marketing specialist looking for an opportunity to expand my professional skillset and help Company X grow.</p>
                 <ul>
                     <li>Minimum qualification degree</li>
                     <li> experience level- Entry level</li>
                     <li> experience length- 2 years </li>
                 </ul>
             </div>
             <div className="description">
                 <h1 className="header"> Job description requirements </h1>
                 <p className="header1"> Location: Nairobi </p>
                 <p className="header1"> Employment-type: Full-time </p>
                 <p className="header1"> Minimum qualification: Diploma in data science</p>

             </div>
             <div className="responsibilities"> 
             <h1 className="header"> Key responsibilities</h1>
             <ul>
                 <li> Motivates employees</li>
                 <li> Increases productivity </li>
                 <li> Promotes understanding </li>
             </ul>

             </div>
             <div className="qualification">
                 <h1  className="header"> Qualification </h1>
                 <ul>
                     <li> Fine tune your analysis, computer engineering and big data skills</li>
                     
                     <li>Earn a bachelor’s degree and begin working on projects</li>
                     <li> Consider pursuing additional professional engineering or big data certifications</li>
                 </ul>

             </div>


             </div>
            </div>
            <div className="span">
                <span className="accept"> Accept </span>
                <span className="decline"> Decline </span>
            </div>

        </section>
    )
}

export default Job;