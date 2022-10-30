import React from 'react'

function information() {
  return (
    <section className="section">

            <div className="right">
                <div className="align-left">
                  <div className="location">
                    <h3 className='title'>Address</h3>
                    <h4 className='address'>Timba Eldoret<button class="button1">Primary</button></h4>
                    <p className='title'>159 Inos Street<br/>
                     Langas Eldoret, Kenya
                    </p>
                    <h4 className='address'>Spotify Nairobi<button className="button2">Secondary</button></h4>
                    <p className='title'>726 William Street<br/>
                     Buruburu,Nairobi Kenya
                    </p>
                    <h3 className='title'>Skills</h3>
                    <p className='title'>Branding<br/>UX/UI<br/>Web Design<br/>Packaging</p>
               </div>
                </div>
             <div className="left"> 
             <div className="information">
             <h1 className='header'>Principal Kelvin</h1>
             <h4 className="title">Ux/UI Designer</h4>
             </div>
             <div className="summary">
                 <h1 className="title">Basic Information</h1>
                 <p className="header4">ID number: 38383838<br/>Birthday: June 5, 1999<br/>Age:22</p>
              </div>
              <div  className='buttons'>
              <input type="button" class="button1" value="✉️Send Email"/>
              <input type="button" class="button2" value="Download Resume"/>
              </div>
              
             <div className="contact">
                 <h1 className="title"> Contact Information </h1>
                 <p className="header4"> Phone: +25479988182<br/>Email: johndoe2gmail.com<br/>Website: www.johndoe.com</p>
                 

             </div>
             <div className="experience"> 
             <h1 className="title">Experience</h1>            
             <p className="header4">
               <b>Infosys</b><br/> Product& UI/UX Designer<br/>April 2018- Present | Eldoret Kenya
             </p>

             </div>
             <div className="education">
                 <h1 className="title">Education</h1>
                 <p className="header4">
               <b>Kisumu Poly</b><br/> Product& UI/UX Designer<br/>April 2018- Present | Eldoret Kenya
             </p>
             </div>
             <div className="accomplishment"> 
             <h1 className="title">Accomplishment</h1>            
             <p className="header4">
               <b>Infosys</b><br/> Product& UI/UX Designer<br/>April 2018- Present | Eldoret Kenya
             </p>

             </div>
             <div className="certification"> 
             <h1 className="title">Certification</h1>            
             <p className="header4">
               <b>Infosys</b><br/> Product& UI/UX Designer<br/>April 2018- Present | Eldoret Kenya
             </p>

             </div>
             </div>

             </div>

             <div className="span">
                <span className="verify"> Verify </span>
                <span className="decline"> Decline </span>
            </div> 
            

        </section>
    )
}

export default information;