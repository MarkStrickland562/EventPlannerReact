import React from 'react';
import PropTypes from 'prop-types';

function Event(props){
  return (
    <p>Event: {props.eventName}<br></br>Date: {props.eventDate}<br></br>Location: {props.eventLocation}<br></br>Menu ID: {props.menusId}<br></br></p>
  );
}

Event.propTypes = {
  eventName: PropTypes.string.isRequired,
  eventDate: PropTypes.string.isRequired,
  eventLocation: PropTypes.string.isRequired,
  menusId: PropTypes.number.isRequired
};

export default Event;
