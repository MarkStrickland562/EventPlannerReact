import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <style jsx>{`
        .container {
          text-align: right;
          margin-top: -1%;
        }

        .button {
          display: inline-block;
          padding: 10px 10px 0px 10px;
          margin-left: 5px;          
        }

        .button p {
          font-size: 15px;
          color: darkgreen;
          padding-bottom: 30px;
          border-bottom: 2px solid transparent;          
        }

        .button p:hover {
          border-bottom: 2px solid black; /* Or whatever color you want */
          padding-bottom: 30px;
          cursor: pointer;          
        }
      `}
      </style>
      <div className="container">
        <Link to="/about">
          <div className="button">
            <p>ABOUT</p>
          </div>
        </Link>
        <Link to="/">
          <div className="button">
            <p>EXIT</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
