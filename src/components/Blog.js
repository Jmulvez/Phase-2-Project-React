import React from "react";
import BlogPost from './BlogPost'

function Blog({ blogs }) {
    console.log(blogs)
    const getAllPosts = blogs.map((blog) => {
        return <div>
                   <BlogPost title={blog.title}
                   image={blog.image}
                   text={blog.text}
                   likes={blog.likes}
                   />
               </div>
    })
    return (
        <div>
          {getAllPosts}
        </div>
    )
}

export default Blog;