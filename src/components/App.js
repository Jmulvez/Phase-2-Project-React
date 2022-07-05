import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Navbar from './Navbar'
import Blog from './Blog';
import NewBlog from "./NewBlog";
import Jobs from './Jobs';

function App() {
    const [blogs, setBlogs] = useState([]);
    const [jobs, setJobs] = useState([]);
    const appStyle = {
        textDecoration: "none",
        color: "blue",
        padding: "15px"
      };
    useEffect(() => {
        fetch("http://localhost:3001/blogs")
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, []);

    useEffect(() => {
        fetch("http://localhost:3001/jobs")
        .then(res => res.json())
        .then(data => setJobs(data))
    }, []);
    
    function handleNewBlog(newBlog) {
        setBlogs([...blogs, newBlog]);
    }
    return (
        <div style={appStyle} >
            <Navbar />
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/blogs">
                    <NewBlog onAddItem={handleNewBlog} />
                    <Blog blogs={blogs} />
                </Route>
                <Route path="/jobs">
                    <Jobs jobs={jobs} />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
    )
}

export default App;