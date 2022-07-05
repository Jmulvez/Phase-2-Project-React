import React from 'react';
import { useHistory } from 'react-router-dom';

function Home() {
    let history = useHistory();
    const homeStyle = {
        height:"500px",
        width:"500px"
      };

      const buttonStyle = {
        textDecoration: "none",
        color: "yellow",
        backgroundColor: "blue",
        height: "22px"
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
                    <button onClick={() => {history.push('/blogs')}} style={buttonStyle}>Login</button>
                </form>
                <img src="https://logos-world.net/wp-content/uploads/2021/08/Blogger-Logo-1999-2001.png" alt="Oh no!" style={homeStyle}/>
            </div>
        </div>
    )
}

export default Home;