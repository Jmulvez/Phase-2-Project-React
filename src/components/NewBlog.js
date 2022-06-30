import React, { useState } from "react";

function NewBlog() {
    const [blog, newBlog] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const blogData = {
            /*title: title,
            image: image,
            text: text,*/
        }
        fetch("http://localhost:3000/blogs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(blogData)
        })
        .then(res => res.json())
        .then()
    }
    return (
        <form className="NewBlog">
            Add New Post!       
            <input></input>
            <input></input>
            <input></input>
        </form>
    )
}

export default NewBlog;