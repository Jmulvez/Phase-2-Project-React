import React from "react";
import JobOpenings from "./JobOpenings";
import { useHistory } from 'react-router-dom';

function Jobs({ jobs }) {
    let history = useHistory();
    const buttonStyle = {
        textDecoration: "none",
        color: "yellow",
        backgroundColor: "blue",
        height: "22px"
      };

    const getAllJobs = jobs.map((job) => {
        return (
            <div>
                <JobOpenings key={job.id}
                             title={job.title}
                             description={job.description}
                             salary={job.salary}
                             />
                <button onClick={() => {history.push('/about')}} style={buttonStyle}>
                Apply Now!
                </button>
            </div>
        )
    })
    
    return (
        <div>
            <button onClick={() => {history.push('/')}} style={buttonStyle}>
                Logout
            </button>
            {getAllJobs}
        </div>
    )
}

export default Jobs;