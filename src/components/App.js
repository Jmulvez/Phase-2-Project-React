import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Blog from './Blog';
import About from './About';
import Navbar from './Navbar'

function App() {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route path="/Blog">
                    <Blog />
                </Route>
            </Switch>
            <Switch>
                <Route path="/About">
                    <About />
                </Route>
            </Switch>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
    )
}

export default App;