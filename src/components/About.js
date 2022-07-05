import React from "react";
import { useHistory } from 'react-router-dom';

function About() {
    let history = useHistory();
    const aboutStyle = {
        textDecoration: "none",
        color: "yellow",
        backgroundColor: "blue",
        height: "22px"
      };
    
    return (
        <div>
            <h1>About Us</h1>
            <h3>
                Re-Blogger is an open source blog that allows its users to post and interact with ideas from other users. We have 
                a goal to connect as many different people from as many backgrounds from all over the world in one giant melting 
                pot of ideas and discourse.
            </h3>
            <h1>Contact Us</h1>
            <h2>blogger@reblogger.com</h2>
            <h2>1(800)555-5555</h2>
            <h2>333 Liberty Ave,</h2>
            <h2>New York, NY, 10019</h2>
            <form className="NewApplication">
                <input 
                label="name"
                placeholder="Name"
                />
                <input 
                label="email"
                placeholder="Email"
                />
                <input 
                label="phone number"
                placeholder="Phone Number"
                />
                <input 
                label="position"
                placeholder="Position"
                />
                <button onClick={() => {history.push('/jobs')}} style={aboutStyle}>Submit</button>
            </form>
        </div>
    )
}

export default About;