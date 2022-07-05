import React, { useState } from "react";

function BlogPost({ title, image, text }) {
    const [liked, setLiked] = useState(false);
    const pictureStyle = {
        width:"450px",
        height:"250px"
    };
    const buttonStyle = {
        textDecoration: "none",
        color: "yellow",
        backgroundColor: "cyan",
        height: "22px"
      };
    return (
        <div>
            <h1>{title}</h1>
            <img src={image} alt="" style={pictureStyle}/>
            <p>{text}</p>
            <button onClick={() => setLiked((prevState) => !prevState)} style={buttonStyle}>
                {liked ? "❤️" : "🤍"}
            </button>
        </div>
    )
}

export default BlogPost;