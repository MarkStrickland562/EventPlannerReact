import React from 'react';
import PropTypes from 'prop-types';

function Invitee(props){
  return (
    <p>Name: {props.inviteeName}<br></br>Email Address: {props.inviteeEmailAddress}<br></br></p>
  );
}

Invitee.propTypes = {
  inviteeName: PropTypes.string.isRequired,
  inviteeEmailAddress: PropTypes.string.isRequired
};

export default Invitee;