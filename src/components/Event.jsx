import React from 'react';
import PropTypes from 'prop-types';

function Event(props){
  return (
    <div>
      <li className="list-group-item list-group-item-success">Event: {props.eventName}<br></br>Date: {props.eventDate}<br></br>Location: {props.eventLocation}<br></br>Menu ID: {props.menusId}<br></br></li>
    </div>
  );
}

Event.propTypes = {
  eventName: PropTypes.string.isRequired,
  eventDate: PropTypes.string.isRequired,
  eventLocation: PropTypes.string.isRequired,
  menusId: PropTypes.number.isRequired
};

export default Event;
