import React from 'react';
import PropTypes from 'prop-types';
import SideNav from './SideNav';
import Header from './Header';
import { connect } from 'react-redux';
import { deleteTask } from './../actions';

function DeleteTaskForm(props) {
  let _id = props.selectedTask;
  let _confirm = null;

  var handleDeleteTaskFormSubmission = event => {
    const { dispatch } = props;
    event.preventDefault();
    if (_confirm.value === 'true') {
      dispatch(deleteTask(_id));
    }
    props.onFormSubmit('tasks');
  };

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
            fontsize: 16px;
          }

          select {
            font-size: 16px;
            color: darkgreen;
            font-weight: bold;
          }
        `}
      </style>
      <div>
        <Header />
        <SideNav />
        <div className='page-content'>
          <h1 className='pageTitle'>DELETE TASK</h1>
          <div>
            <form
              style={{
                width: '15%',
                padding: '5px 5px 5px 5px',
                border: '2px solid darkgreen',
                borderRadius: '4px'
              }}
              onSubmit={handleDeleteTaskFormSubmission}
            >
              <label>Confirm Delete: </label>
              <select
                ref={input => {
                  _confirm = input;
                }}
              >
                <option value='undefined' disabled />
                <option value='false'>No</option>
                <option value='true'>Yes</option>
              </select>
              &nbsp;
              <button type='submit' className='button-main'>
                CONFIRM
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

DeleteTaskForm.propTypes = {
  selectedTask: PropTypes.string,
  onFormSubmit: PropTypes.func,
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  return {
    selectedTask: state.selectedTask
  };
};

export default connect(mapStateToProps)(DeleteTaskForm);
