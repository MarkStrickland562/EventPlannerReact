import React from 'react';
import SideNav from './SideNav';
import Header from './Header';

function Main(){
  return (
    <div>
      <style jsx>{`
        .image {
          margin-left: auto;
          margin-right: auto;
          text-align: center;
          font-size: 48px;
          font-style: italic;
        }
        .arrow {
          transform: scale(8,8)
        }
      `}
      </style>
      <div>
        <Header></Header>
        <SideNav></SideNav>
        <div className="image">
          <br></br><br></br><br></br>
          <p>Let's Get Started!</p>
          <p className="arrow">&#8678;</p>
        </div>
      </div>
    </div>
  );
}

export default Main;
