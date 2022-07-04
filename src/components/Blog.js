import React from "react";
import BlogPost from './BlogPost'
import { useHistory } from 'react-router-dom';

function Blog({ blogs }) {
    let history = useHistory();
    const getAllPosts = blogs.map((blog) => {
        return <div>
                   <BlogPost title={blog.title}
                   image={blog.image}
                   text={blog.text}
                   />
               </div>
    })
    return (
        <div>
            <button onClick={() => {history.push('/')}}>
                Logout
            </button>
          {getAllPosts}
        </div>
    )
}

export default Blog;