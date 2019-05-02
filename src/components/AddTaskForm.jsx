import React from 'react';
import PropTypes from 'prop-types';
import SideNav from './SideNav';
import Header from './Header';

function AddTaskForm(props){

  let _taskDescription = null;
  let _taskPlannedStartDateTime = null;

  function handleNewTaskFormSubmission(event) {
    event.preventDefault();
    props.onNewTaskCreation({taskDescription: _taskDescription.value, taskPlannedStartDateTime: _taskPlannedStartDateTime.value});
    _taskDescription = '';
    _taskPlannedStartDateTime = '';
  }

  return (
    <div>
      <style jsx>{`>
        .pageTitle {
          font-size: 30px;
          margin-top: 2%;
          color: darkgreen;
        }

        .page-content {
          width: 100%;
          min-height: 100vh;
          position: absolute;
          padding-left: 10%;
          background-color: beige;
          color: darkgreen;
        }

        label: {
          font-size: 16px;
        }

        input {
          font-size: 16px;
          color: darkgreen;
          font-weight: bold;
          width: 300px;
        }

        select {
          font-size: 16px;
          color: darkgreen;
          font-weight: bold;
        }

        option {
          font-size: 16px;
          color: darkgreen;
          font-weight: bold;
          width: 240px;
        }
      `}
      </style>
      <div>
        <Header></Header>
        <SideNav></SideNav>
        <div className='page-content'>
          <h1 className='pageTitle'>ADD TASK</h1>
          <div>
            <form style={{width: '30%', padding: '5px 5px 5px 5px', border: '2px solid darkgreen', borderRadius: '4px'}} onSubmit={handleNewTaskFormSubmission}>
              <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Task Name: </label>
              <input
                type='text'
                id='taskDescription'
                ref={(input) => {_taskDescription = input;}}/>
              <br></br>
              <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Task Date: </label>
              <input
                type='datetime-local'
                id='taskPlannedStartDateTime'
                ref={(input) => {_taskPlannedStartDateTime = input;}}/>
              <br></br><br></br>
              <button type='submit' className='button-main'>ADD TASK</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

AddTaskForm.propTypes = {
  onNewTaskCreation: PropTypes.func
};

export default AddTaskForm;
