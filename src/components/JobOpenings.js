import React from "react";

function JobOpenings({ title, description, salary }) {
    return (
        <div>
            <h1>{title}</h1>
            <h2>{description}</h2>
            <p>{salary}</p>
        </div>
    )
}

export default JobOpenings;