import React from 'react';
import Header from './Header';
import SideNav from './SideNav';

function About(){
  return (
    <div>
      <style jsx>{`>
        .page-content {
          width: 100%;
          font-family: 'Luckiest Guy', cursive;
          min-height: 100vh;
          position: absolute;
          padding-left: 10%;
        }

        .button {
          color: darkgreen;
        }
      `}
      </style>
      <div>
        <Header></Header>
        <SideNav></SideNav>
        <div className="page-content">
          <h1>About this Application</h1>
          <h3>Overview</h3>
          <p>This project is a re-development of an Angular-based project that was itself a redevelopment of a C#-based team project from the Epicodus C# class called 
            "eHappenings", an Event Planning tool. The C# code was converted to javascript and Angular 
          and the C# Model/View/Controller structure was converted to the Angular Model/View/Component structure. Then for this project, the Angular and Typescript code was converted to 
          React and JSX. Much of the styling has been kept from the C# and Angular projects and credit for the styling goes to Clara Munro and Micaela Jawor</p>
          <h3>Technical Features</h3>
          <div>
            <ul>
              <li>7 model classes</li>
              <li>45 child components</li>
              <li>39 routes</li>
              <li>1 API</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
