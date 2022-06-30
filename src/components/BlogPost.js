import React from "react";

function BlogPost({ title, image, text, likes }) {
    const buttonStyle = {
        display: "flex",
        width: "35px",
        height: "40px",
        padding: "10px",
        margin: "5px 5px 2px",
        background: "blue",
        textDecoration: "none",
        color: "yellow",
        textAlign: "center"
      };
    const pictureStyle = {
        width:"450px",
        height:"250px"

    };
    return (
        <div>
            <h1>{title}</h1>
            <img src={image} alt="Image Not Found" style={pictureStyle}/>
            <p>{text}</p>
            <button style={buttonStyle}>
            <p>{likes}</p>
            </button>
        </div>
    )
}

export default BlogPost;