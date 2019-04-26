import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <style jsx>{`
        .button-main {
          color: darkgreen;
          align: right;
          font-family: 'Luckiest Guy', cursive;
          padding-right: 3%;
        }
      `}
      </style>
      <div align="right" class="button-main">
        <Link to="/about">ABOUT</Link> | <Link to="/">EXIT</Link>
      </div>
    </div>
  );
}

export default Header;
