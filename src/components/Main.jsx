import React from 'react';
import SideNav from './SideNav';
import Header from './Header';
import BackgroundImg from '../assets/images/event.jpeg';

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
      <div style={{textAlign: 'center', backgroundImage: `url(${BackgroundImg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', minHeight: '100vh', position: 'related'}}>
        <Header></Header>
        <SideNav></SideNav>
        <div className="image">
          <br></br><br></br><br></br>
          <p>Let&#39;s Get Started!</p>
          <br></br>
          <p className="arrow">&#8678;</p>
        </div>
      </div>
    </div>
  );
}

export default Main;
