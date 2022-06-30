import React from "react";

function BlogPost({ title, image, text, likes }) {
    const pictureStyle = {
        width:"450px",
        height:"250px"

    };
    return (
        <div>
            <h1>{title}</h1>
            <img src={image} alt="Image Not Found" style={pictureStyle}/>
            <p>{text}</p>
            <button>
                👍 {likes}
            </button>
        </div>
    )
}

export default BlogPost;