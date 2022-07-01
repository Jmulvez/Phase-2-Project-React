import React from 'react';

function Home() {
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
                    <input placeholder="Username">
                    </input>
                    <input placeholder="Password">
                    </input>
                    <button>Login</button>
                </form>
                <img src="https://logos-world.net/wp-content/uploads/2021/08/Blogger-Logo-1999-2001.png" style={homeStyle}/>
            </div>
        </div>
    )
}

export default Home;