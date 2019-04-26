import React from 'react';
import PropTypes from 'prop-types';

function Event(props){
  return (
    <div>
      <li class="list-group-item list-group-item-success">{props.eventName}<br></br>{props.eventDate}<br></br>{props.eventLocation}<br></br>{props.menusId}<br></br></li>
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
