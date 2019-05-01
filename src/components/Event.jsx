import React from 'react';
import PropTypes from 'prop-types';

function Event(props){
  return (
    <p>&nbsp;Event:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {props.eventName}<br></br>
       &nbsp;Date:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {props.eventDate}<br></br>
       &nbsp;Location:&nbsp; {props.eventLocation}<br></br>
       &nbsp;Menu:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {props.menuTheme}<br></br>    
    </p>   
  );
}

Event.propTypes = {
  eventName: PropTypes.string.isRequired,
  eventDate: PropTypes.string.isRequired,
  eventLocation: PropTypes.string.isRequired,
  menuTheme: PropTypes.string.isRequired
};

export default Event;
