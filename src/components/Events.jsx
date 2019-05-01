import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SideNav from './SideNav';
import Header from './Header';
import Event from './Event';

function Events(props){
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

        .parentColumn {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          width: 80%;
        }

        .column {
          height: 18vh;
          width: 25vw;;
          margin: 2px 2px 2px 2px;
          padding: 5px 5px 5px 5px;
          border: 2px solid black;
          border-radius: 4px;
          border-color: darkgreen;
          background-color: white;
          font-size: 18px;
        }

      `}
      </style>
      <div>
        <Header></Header>
        <SideNav></SideNav>
        <div className="page-content">
          <h1 className="pageTitle">EVENTS</h1>
          <div>
            <button type="button" className="button-main"><Link className="link" to="/addevent">ADD EVENT</Link></button>
            <button type="button" className="button-main"><Link className="link" to="/searchevents">SEARCH EVENTS</Link></button>
            <br></br><br></br>
          </div>
          <div className="parentColumn">
            {Object.keys(props.events).map(function(eventId) {
              var event = props.events[eventId];
              return <div className="column" key={eventId}>
                <div>
                  <Event eventName={event.eventName}
                    eventDate={event.eventDate}
                    eventLocation ={event.eventLocation}
                    menusId={event.menusId}
                    eventId={event.eventId}
                    key={eventId} />
                </div>
                <div>
                  <button onClick={() => {props.onEventSelection({eventId}, {event});}} type="button" className="button-main"><Link className="link" to="/deleteevent">DELETE</Link></button>
                  <button onClick={() => {props.onEventSelection({eventId}, {event});}} type="button" className="button-main"><Link className="link" to="/editevent">UPDATE</Link></button>
                </div>
              </div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

Events.propTypes = {
  events: PropTypes.object,
  onEventSelection: PropTypes.func
};

export default Events;
