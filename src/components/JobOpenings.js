import React from "react";

function JobOpenings({ title, description, salary }) {
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <p>{salary}</p>
        </div>
    )
}

export default JobOpenings;