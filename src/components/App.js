import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Navbar from './Navbar'
import Blog from './Blog';
import NewBlog from "./NewBlog";

function App() {
    const [blogs, setBlogs] = useState([]);
    const appStyle = {
        textDecoration: "none",
        color: "blue",
        padding: "10px"
      };
    useEffect(() => {
        fetch("http://localhost:3000/blogs")
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, []);
    return (
        <div style={appStyle} >
            <Navbar />
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/blogs">
                    <NewBlog blogs={blogs} />
                    <Blog blogs={blogs} />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
    )
}

export default App;