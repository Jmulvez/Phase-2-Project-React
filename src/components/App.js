import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Blog from './Blog';
import About from './About';

function App() {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route path="Blog"></Route>
            </Switch>
        </div>
    )
}

export default App;