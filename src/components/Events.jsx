import React from 'react';
//import { Link } from 'react-router-dom';
import EventData from './EventData';
import SideNav from './SideNav';
import Header from './Header';
import Event from './Event';

function Events(){
  return (
    <div>
      <style jsx>{`>
        .pageTitle {
          font-size: 30px;
          font-family: 'Luckiest Guy', cursive;
          margin-top: 2%;
          color: darkgreen;
        }

        .page-content {
          width: 100%;
          font-family: 'Luckiest Guy', cursive;
          min-height: 100vh;
          position: absolute;
          padding-left: 10%;
          background-color: beige;
          color: darkgreen;
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
          <h1 className="pageTitle">EVENTS</h1>
          <ul className="list-group list-group-horizontal">
            {EventData.map((event, index) =>
              <Event eventName={event.eventName}
                eventDate={event.eventDate}
                eventLocation ={event.eventLocation}
                menusId={event.menusId}
                key={index}/>
            )}
          </ul>
          {/* <button type="button" className="button"><Link className="link" to="/addevent">Add Event</Link></button>
          <button type="button" className="button"><Link className="link" to="/searchevents">Search Events</Link></button> */}
        </div>
      </div>
    </div>
  );
}

export default Events;
