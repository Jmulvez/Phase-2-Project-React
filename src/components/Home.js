import React from 'react';
import { useHistory } from 'react-router-dom';

function Home() {
    let history = useHistory();
    const homeStyle = {
        height:"500px",
        width:"500px"
      };
    return (
        <div>
            <h1>
                Welcome to Re-Blogger!
            </h1>
            <div>
                <form>
                    <input 
                    placeholder="Username">
                    </input>
                    <input 
                    placeholder="Password">
                    </input>
                    <button onClick={() => {history.push('/blogs')}}>Login</button>
                </form>
                <img src="https://logos-world.net/wp-content/uploads/2021/08/Blogger-Logo-1999-2001.png" alt="Oh no!" style={homeStyle}/>
            </div>
        </div>
    )
}

export default Home;