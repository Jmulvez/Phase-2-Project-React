import React from "react";

function BlogPost({ blog }) {
    return (
        <div>
            <h1>{blog.title}</h1>
            <img src={blog.image} alt="Image Not Found"/>
            <p>{blog.text}</p>
            <p>{blog.likes}</p>
        </div>
    )
}

export default BlogPost;