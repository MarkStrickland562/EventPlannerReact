import React from 'react';

function About(){
  return (
    <div>
      <h1>About this Application</h1>
      <h3>Overview</h3>
      <p>This project is a re-development of an Angular-based project that was itself a redevelopment of a C#-based team project from the Epicodus C# class called 
        "eHappenings", an Event Planning tool. The C# code was been converted to javascript and Angular
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
  );
}

export default About;
