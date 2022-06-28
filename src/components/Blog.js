import React from "react";
import BlogPost from './BlogPost'

function Blog({ blogs }) {
    const getAllPosts = blogs.map((blog) => {
        return <div>
                   <BlogPost blog={blog}/>
               </div>
    })
    return (
        <div>
          {getAllPosts}
        </div>
    )
}

export default Blog;