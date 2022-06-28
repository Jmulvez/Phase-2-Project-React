import React, { useEffect, useState } from 'react';
import Blog from './Blog'

function MainContainer() {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3001")
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, []);
    
    return (
        <div>
            <Blog blogs={blogs} />
        </div>
    )
}

export default MainContainer;