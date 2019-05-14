import React from 'react';
import PropTypes from 'prop-types';
import SideNav from './SideNav';
import Header from './Header';
import { connect } from 'react-redux';
import constants from './../../src/constants';
const { c } = constants;

function EditEventForm(props) {
  let _id = props.selectedEvent;
  let _eventName = props.events[props.selectedEvent].eventName;
  let _eventDate = props.events[props.selectedEvent].eventDate;
  let _eventLocation = props.events[props.selectedEvent].eventLocation;
  let _menusId = props.events[props.selectedEvent].menusId;

  function handleEditEventFormSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: c.EDIT_EVENT,
      id: _id,
      eventName: _eventName.value,
      eventDate: _eventDate.value,
      eventLocation: _eventLocation.value,
      menusId: _menusId.value
    };
    dispatch(action);
    props.onFormSubmit('events');
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
        <div className="page-content">
          <h1 className="pageTitle">UPDATE EVENT</h1>
          <div>
            <form
              style={{
                width: '30%',
                padding: '5px 5px 5px 5px',
                border: '2px solid darkgreen',
                borderRadius: '4px'
              }}
              onSubmit={handleEditEventFormSubmission}
            >
              <label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Event Name:&nbsp;&nbsp;
              </label>
              <input
                type="text"
                id="eventName"
                defaultValue={_eventName}
                ref={input => {
                  _eventName = input;
                }}
              />
              <br />
              <label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Event
                Date:&nbsp;&nbsp;
              </label>
              <input
                type="date"
                id="eventDate"
                defaultValue={_eventDate}
                ref={input => {
                  _eventDate = input;
                }}
              />
              <br />
              <label>Event Location:&nbsp;&nbsp;</label>
              <input
                type="text"
                id="eventLocation"
                defaultValue={_eventLocation}
                ref={input => {
                  _eventLocation = input;
                }}
              />
              <br />
              <label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Menu:{' '}
              </label>
              <select
                ref={input => {
                  _menusId = input;
                }}
              >
                {Object.keys(props.menus).map(function (menuId) {
                  var menu = props.menus[menuId];
                  if (menuId == _menusId) {
                    return (
                      <option
                        selected={menu.menuTheme}
                        defaultValue={menuId}
                        key={menuId}
                        value={menuId}
                      >
                        {menu.menuTheme}
                      </option>
                    );
                  } else {
                    return (
                      <option key={menuId} value={menuId}>
                        {menu.menuTheme}
                      </option>
                    );
                  }
                })}
              </select>
              <br />
              <br />
              <button type="submit" className="button-main">
                UPDATE EVENT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

EditEventForm.propTypes = {
  events: PropTypes.object,
  menus: PropTypes.object,
  selectedEvent: PropTypes.string,
  onFormSubmit: PropTypes.func
};

const mapStateToProps = state => {
  return {
    events: state.masterEvents,
    menus: state.masterMenus,
    selectedEvent: state.selectedEvent
  };
};

export default connect(mapStateToProps)(EditEventForm);
