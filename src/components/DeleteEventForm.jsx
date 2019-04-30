import React from 'react';
import PropTypes from 'prop-types';
import SideNav from './SideNav';
import Header from './Header';

function DeleteEventForm(props){

  let _confirm = null;
 
  var handleDeleteEventFormSubmission = (event) => {
    event.preventDefault();
    props.onEventDeletion({confirm: _confirm.value, eventToDelete: props.selectedEvent});
  };

  return (
    <div>
      <style jsx>{`>
        .pageTitle {
          font-size: 30px;
          font-family: 'Luckiest Guy', cursive;
          margin-top: 2%;
          color: darkgreen;
        }

        .page-content {
          width: 100%;
          font-family: 'Luckiest Guy', cursive;
          min-height: 100vh;
          position: absolute;
          padding-left: 10%;
          background-color: beige;
          color: darkgreen;
        }

      `}
      </style>
      <div>
        <Header></Header>
        <SideNav></SideNav>
        <div id="page-content">
          <h1 id="pageTitle">DELETE EVENT</h1>
          <div>
            <form onSubmit={handleDeleteEventFormSubmission}>
              <label>Confirm Delete:</label>
              <select ref={(input) => {_confirm = input;}}>
                <option value="undefined" disabled></option>
                <option value="false">No</option>
                <option value="true">Yes</option>
              </select>
              <button type='submit' className="button-main">CONFIRM</button>
              {/* <Redirect to="/events" /> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

DeleteEventForm.propTypes = {
  selectedEvent: PropTypes.object,
  onEventDeletion: PropTypes.func
};

export default DeleteEventForm;
