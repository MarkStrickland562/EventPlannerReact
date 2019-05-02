import React from 'react';
import PropTypes from 'prop-types';
import SideNav from './SideNav';
import Header from './Header';

function EditTaskForm(props){

  let _taskDescription = props.selectedTaskProps.task.taskDescription;
  let _taskPlannedStartDateTime = props.selectedTaskProps.task.taskPlannedStartDateTime;

  var handleEditTaskFormSubmission = (event) => {
    event.preventDefault();
    props.onTaskUpdate({taskToUpdate: props.selectedTask.taskId, taskDescription: _taskDescription.value, taskPlannedStartDateTime: _taskPlannedStartDateTime.value});
  };

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

        label {
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
          <h1 className='pageTitle'>UPDATE TASK</h1>
          <div>
            <form style={{width: '30%', padding: '5px 5px 5px 5px', border: '2px solid darkgreen', borderRadius: '4px'}} onSubmit={handleEditTaskFormSubmission}>
              <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Task Name:&nbsp;&nbsp;</label>
              <input
                type='text'
                id='taskDescription'
                defaultValue={_taskDescription}
                ref={(input) => {_taskDescription = input;}}/>
              <br></br>
              <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Task Date:&nbsp;&nbsp;</label>
              <input
                type='datetime-local'
                id='taskPlannedStartDateTime'
                defaultValue={_taskPlannedStartDateTime}
                ref={(input) => {_taskPlannedStartDateTime = input;}}/>
              <br></br><br></br>
              <button type='submit' className='button-main'>UPDATE TASK</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

EditTaskForm.propTypes = {
  selectedTask: PropTypes.object,
  selectedTaskProps: PropTypes.object,
  onTaskUpdate: PropTypes.func
};

export default EditTaskForm;
