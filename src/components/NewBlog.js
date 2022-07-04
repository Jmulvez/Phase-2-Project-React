import React, { useState } from "react";

function NewBlog({ onAddItem }) {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [text, setText] = useState("");

    function handleNewTitle(event) {
        setTitle(event.target.value);
    }
    function handleNewImage(event) {
        setImage(event.target.value);
    }
    function handleNewText(event) {
        setText(event.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        const blogData = {
            title: title,
            image: image,
            text: text
        };
        console.log(blogData)
        fetch("http://localhost:3001/blogs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(blogData)
        })
        .then(res => res.json())
        .then(newBlog => onAddItem(newBlog))
    }
    return (
        <form className="NewBlog" onSubmit={handleSubmit}>
            Add New Post:
            <input
            label="title"
            placeholder="Title"
            onChange={handleNewTitle}
            value={title}
            />
            <input 
            label="image"
            placeholder="Image URL"
            onChange={handleNewImage}
            value={image}
            />
            <input 
            label="text"
            placeholder="Your description here"
            onChange={handleNewText}
            value={text}
            />
            <button>Submit</button>
        </form>
    )
}

export default NewBlog;