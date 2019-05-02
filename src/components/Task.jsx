import React from 'react';
import PropTypes from 'prop-types';

function Task(props){
  return (
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Description: {props.taskDescription}<br></br>Start Date/Time: {props.taskPlannedStartDateTime}<br></br></p>
  );
}

Task.propTypes = {
  taskDescription: PropTypes.string.isRequired,
  taskPlannedStartDateTime: PropTypes.string.isRequired
};

export default Task;
