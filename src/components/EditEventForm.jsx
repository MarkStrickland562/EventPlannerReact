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
          width: 240px;
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
          <h1 className='pageTitle'>UPDATE EVENT</h1>
          <div>
            <form style={{width: '30%', padding: '5px 5px 5px 5px', border: '2px solid darkgreen', borderRadius: '4px'}} onSubmit={handleEditEventFormSubmission}>
              <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Event Name:&nbsp;&nbsp;</label>
              <input
                type='text'
                id='eventName'
                defaultValue={_eventName}
                ref={(input) => {_eventName = input;}}/>
              <br></br>
              <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Event Date:&nbsp;&nbsp;</label>
              <input
                type='date'
                id='eventDate'
                defaultValue={_eventDate}
                ref={(input) => {_eventDate = input;}}/>
              <br></br>
              <label>Event Location:&nbsp;&nbsp;</label>
              <input
                type='text'
                id='eventLocation'
                defaultValue={_eventLocation}
                ref={(input) => {_eventLocation = input;}}/>
              <br></br>
              <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Menu: </label>
              <select ref={(input) => {_menusId = input;}}>
                {Object.keys(props.menus).map(function(menuId) {
                  var menu = props.menus[menuId];
                  if (menuId == _menusId) {
                    return <option selected={menu.menuTheme} defaultValue={menuId} key={menuId} value={menuId}>{menu.menuTheme}</option>;
                  } else {
                    return <option key={menuId} value={menuId}>{menu.menuTheme}</option>;
                  }
                })}
              </select>
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
  menus: PropTypes.object,
  selectedEvent: PropTypes.object,
  selectedEventProps: PropTypes.object,
  onEventUpdate: PropTypes.func
};

export default EditEventForm;
