import React from 'react';
import PropTypes from 'prop-types';
import SideNav from './SideNav';
import Header from './Header';
import { connect } from 'react-redux';
import { editTask } from './../actions';

function EditTaskForm(props) {
  let _id = props.selectedTask;
  let _taskDescription = props.tasks[props.selectedTask].taskDescription;
  let _taskPlannedStartDateTime =
    props.tasks[props.selectedTask].taskPlannedStartDateTime;

  function handleEditTaskFormSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    dispatch(
      editTask(_id, _taskDescription.value, _taskPlannedStartDateTime.value)
    );
    props.onFormSubmit('tasks');
  }

  return (
    <div>
      <style jsx>
        {`
          > .pageTitle {
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
            width: 300px;
          }

          option {
            font-size: 16px;
            color: darkgreen;
            font-weight: bold;
            width: 300px;
          }
        `}
      </style>
      <div>
        <Header />
        <SideNav />
        <div className='page-content'>
          <h1 className='pageTitle'>UPDATE TASK</h1>
          <div>
            <form
              style={{
                width: '30%',
                padding: '5px 5px 5px 5px',
                border: '2px solid darkgreen',
                borderRadius: '4px'
              }}
              onSubmit={handleEditTaskFormSubmission}
            >
              <label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Task Name:&nbsp;&nbsp;
              </label>
              <input
                type='text'
                id='taskDescription'
                defaultValue={_taskDescription}
                ref={input => {
                  _taskDescription = input;
                }}
              />
              <br />
              <label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Task
                Date:&nbsp;&nbsp;
              </label>
              <input
                type='datetime-local'
                id='taskPlannedStartDateTime'
                defaultValue={_taskPlannedStartDateTime}
                ref={input => {
                  _taskPlannedStartDateTime = input;
                }}
              />
              <br />
              <br />
              <button type='submit' className='button-main'>
                UPDATE TASK
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

EditTaskForm.propTypes = {
  tasks: PropTypes.object,
  selectedTask: PropTypes.string,
  onFormSubmit: PropTypes.func,
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  return {
    tasks: state.masterTasks,
    selectedTask: state.selectedTask
  };
};

export default connect(mapStateToProps)(EditTaskForm);
