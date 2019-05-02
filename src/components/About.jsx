import React from 'react';
import Header from './Header';
import SideNav from './SideNav';

function About(){
  return (
    <div>
      <div>
        <Header></Header>
        <SideNav></SideNav>
        <div style={{paddingLeft: '10%', paddingRight: '5%'}}>
          <h1>About this Application</h1>
          <h3>Overview</h3>
          <p>This project is a re-development of an Angular-based project that was itself a redevelopment of a C#-based team project from the Epicodus C# class called
          &#34;eHappenings&#34;, an Event Planning tool. The C# code was converted to javascript and Angular
          and the C# Model/View/Controller structure was converted to the Angular Model/View/Component structure. Then for this project, the Angular and Typescript code was converted to
          React and JSX. Much of the styling has been kept from the C# and Angular projects and credit for the styling goes to Clara Munro and Micaela Jawor.
          Credit for the format of the README goes to Shawn Lunsford.
          </p>
          <h3>Technical Features</h3>
          <div>
            <ul>
              <li>7 models</li>
              <li>49 components</li>
              <li>40 routes</li>
              <li>1 API</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
