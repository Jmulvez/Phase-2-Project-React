import React from "react";
import JobOpenings from "./JobOpenings";

function Jobs({ jobs }) {
    const getAllJobs = jobs.map((job) => {
        return (
            <div>
                <JobOpenings title={job.title}
                description={job.description}
                salary={job.salary}
                />
            </div>
        )
    })
    return (
        <div>
            {getAllJobs}
        </div>
    )
}

export default Jobs;