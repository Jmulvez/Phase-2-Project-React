import React from "react";

function BlogPost({ title, image, text, likes }) {
    const pictureStyle = {
        width:"450px",
        height:"250px"
    };
    const likeButtonStyle = {
        width:"60px",
        height:"30px",
        backgroundColor:"blue",
        color:"gold"
    };
    return (
        <div>
            <h1>{title}</h1>
            <img src={image} alt="Image Not Found" style={pictureStyle}/>
            <p>{text}</p>
            <button style={likeButtonStyle}>
                👍 {likes}
            </button>
        </div>
    )
}

export default BlogPost;