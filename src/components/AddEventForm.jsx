import React from 'react';
import PropTypes from 'prop-types';
import SideNav from './SideNav';
import Header from './Header';

function AddEventForm(props){

  let _eventName = null;
  let _eventDate = null;
  let _eventLocation = null;
  let _menusId = null;

  function handleNewEventFormSubmission(event) {
    event.preventDefault();
    props.onNewEventCreation({eventName: _eventName.value, eventDate: _eventDate.value, eventLocation: _eventLocation.value, menusId: _menusId.value});
    _eventName = '';
    _eventDate = '';
    _eventLocation = '';
    _menusId = '';
  }

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
        <div className='page-content'>
          <h1 className='pageTitle'>ADD EVENT</h1>
          <div>
            <form onSubmit={handleNewEventFormSubmission}>
              <label>Event Name:  </label>
              <input
                type='text'
                id='eventName'
                placeholder='Event Name'
                ref={(input) => {_eventName = input;}}/>
              <br></br>
              <label>Event Date:  </label>
              <input
                type='date'
                id='eventDate'
                placeholder='Event Date'
                ref={(input) => {_eventDate = input;}}/>
              <br></br>
              <label>Event Location:  </label>
              <input
                type='text'
                id='eventLocation'
                placeholder='Event Location'
                ref={(input) => {_eventLocation = input;}}/>
              <br></br>
              <label>Menus Id:  </label>
              <input
                type='number'
                id='menusId'
                placeholder='Menus Id'
                ref={(input) => {_menusId = input;}}/>
              <br></br><br></br>
              <button type='submit' className='button-main'>ADD EVENT</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

AddEventForm.propTypes = {
  onNewEventCreation: PropTypes.func
};

export default AddEventForm;
