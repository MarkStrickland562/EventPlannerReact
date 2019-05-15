import React from 'react';
import SideNav from './SideNav';
import Header from './Header';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTask } from './../actions';

function AddTaskForm(props) {
  let _taskDescription = null;
  let _taskPlannedStartDateTime = null;

  function handleNewTaskFormSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    dispatch(addTask(_taskDescription.value, _taskPlannedStartDateTime.value));
    _taskDescription = '';
    _taskPlannedStartDateTime = '';
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

          label: {
            font-size: 16px;
          }

          input {
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
          <h1 className='pageTitle'>ADD TASK</h1>
          <div>
            <form
              style={{
                width: '30%',
                padding: '5px 5px 5px 5px',
                border: '2px solid darkgreen',
                borderRadius: '4px'
              }}
              onSubmit={handleNewTaskFormSubmission}
            >
              <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Task Name: </label>
              <input
                type='text'
                id='taskDescription'
                ref={input => {
                  _taskDescription = input;
                }}
              />
              <br />
              <label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Task Date:{' '}
              </label>
              <input
                type='datetime-local'
                id='taskPlannedStartDateTime'
                ref={input => {
                  _taskPlannedStartDateTime = input;
                }}
              />
              <br />
              <br />
              <button type='submit' className='button-main'>
                ADD TASK
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

AddTaskForm.propTypes = {
  onFormSubmit: PropTypes.func,
  dispatch: PropTypes.func
};

export default connect()(AddTaskForm);
