import React, { useState } from "react";

function BlogPost({ title, image, text }) {
    const [liked, setLiked] = useState(false);
    const pictureStyle = {
        width:"450px",
        height:"250px"
    };
    return (
        <div>
            <h1>{title}</h1>
            <img src={image} alt="Image Not Found" style={pictureStyle}/>
            <p>{text}</p>
            <button onClick={() => setLiked((prevState) => !prevState)}>
                {liked ? "❤️" : "🤍"}
            </button>
        </div>
    )
}

export default BlogPost;