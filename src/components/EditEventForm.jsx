import React from 'react';
import PropTypes from 'prop-types';
import SideNav from './SideNav';
import Header from './Header';

function EditEventForm(props){

  let _eventName = props.selectedEventProps.event.eventName;
  let _eventDate = props.selectedEventProps.event.eventDate;
  let _eventLocation = props.selectedEventProps.event.eventLocation;
  let _menusId = props.selectedEventProps.event.menusId;

  var handleEditEventFormSubmission = (event) => {
    event.preventDefault();
    props.onEventUpdate({eventToUpdate: props.selectedEvent.eventId, eventName: _eventName.value, eventDate: _eventDate.value, eventLocation: _eventLocation.value, menusId: _menusId.value});
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
        <div className='page-content'>
          <h1 className='pageTitle'>UPDATE EVENT</h1>
          <div>
            <form onSubmit={handleEditEventFormSubmission}>
              <label>Event Name:  </label>
              <input
                type='text'
                id='eventName'
                placeholder='Event Name'
                defaultValue={_eventName}
                ref={(input) => {_eventName = input;}}/>
              <br></br>
              <label>Event Date:  </label>
              <input
                type='date'
                id='eventDate'
                placeholder='Event Date'
                defaultValue={_eventDate}
                ref={(input) => {_eventDate = input;}}/>
              <br></br>
              <label>Event Location:  </label>
              <input
                type='text'
                id='eventLocation'
                placeholder='Event Location'
                defaultValue={_eventLocation}
                ref={(input) => {_eventLocation = input;}}/>
              <br></br>
              <label>Menus Id:  </label>
              <input
                type='number'
                id='menusId'
                placeholder='Menus Id'
                defaultValue={_menusId}
                ref={(input) => {_menusId = input;}}/>
              <br></br><br></br>
              <button type='submit' className='button-main'>UPDATE EVENT</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

EditEventForm.propTypes = {
  selectedEvent: PropTypes.object,
  selectedEventProps: PropTypes.object,
  onEventUpdate: PropTypes.func
};

export default EditEventForm;
