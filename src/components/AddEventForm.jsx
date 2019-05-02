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
    _menusId = null;
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
        <Header></Header>
        <SideNav></SideNav>
        <div className='page-content'>
          <h1 className='pageTitle'>ADD EVENT</h1>
          <div>
            <form style={{width: '30%', padding: '5px 5px 5px 5px', border: '2px solid darkgreen', borderRadius: '4px'}} onSubmit={handleNewEventFormSubmission}>
              <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Event Name: </label>
              <input
                type='text'
                id='eventName'
                ref={(input) => {_eventName = input;}}/>
              <br></br>
              <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Event Date: </label>
              <input
                type='date'
                id='eventDate'
                ref={(input) => {_eventDate = input;}}/>
              <br></br>
              <label>Event Location: </label>
              <input
                type='text'
                id='eventLocation'
                ref={(input) => {_eventLocation = input;}}/>
              <br></br>
              <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Menu: </label>
              <select ref={(input) => {_menusId = input;}}>
                {Object.keys(props.menus).map(function(menuId) {
                  var menu = props.menus[menuId];
                  return <option key={menuId} value={menuId}>{menu.menuTheme}</option>;
                })}
              </select>
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
  menus: PropTypes.object,
  onNewEventCreation: PropTypes.func
};

export default AddEventForm;
