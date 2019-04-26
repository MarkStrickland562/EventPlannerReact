import React from 'react';
import { Link } from 'react-router-dom';
import BackgroundImg from '../assets/images/background.png';

function Welcome(){
  return (
    <div style={{textAlign: 'center', backgroundImage: `url(${BackgroundImg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', minHeight: '100vh', position: 'related'}}>
      <style jsx>{`
            .container {
                color: green;
                padding-top: 10%;
                position: relative;
                left: 0;
                top: 10%;
                width: 100%;
                text-align: center;
                font-size: 18px;
                font-family: 'Luckiest Guy', cursive;
            }
            .e {
                font-size: 30px;
            }
            .button {
                background-color: white;
                color: darkgreen;
                width: 200px;
                border: 3px solid darkgreen;
                border-radius: 15px;
                padding: 25px;
                margin: 25px;
                text-decoration: none;
            }
            .link {
              color: darkgreen;
              font-weight: bold;
              font-size: 20px;
              text-decoration: none;
            }
        `}
      </style>
      <div className="container">
        <h1>Welcome to <span className="e">e</span>Happenings!</h1>
        <h2>Plan your next fabulous event</h2>
      </div>
      <div>
        <button type="button" className="button"><Link className="link" to="/main">ENTER</Link></button>
      </div>
    </div>
  );
}

export default Welcome;