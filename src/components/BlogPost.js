import React from "react";

function BlogPost({ title, image, text, likes }) {
    const buttonStyle = {
        display: "flex",
        width: "50px",
        padding: "10px",
        margin: "10px 10px 3px",
        background: "blue",
        textDecoration: "none",
        color: "yellow",
      };
    return (
        <div>
            <h1>{title}</h1>
            <img src={image} alt="Image Not Found"/>
            <p>{text}</p>
            <button style={buttonStyle}>
            <p>{likes}</p>
            </button>
        </div>
    )
}

export default BlogPost;