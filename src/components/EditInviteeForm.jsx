import React from 'react';
import PropTypes from 'prop-types';
import SideNav from './SideNav';
import Header from './Header';
import { connect } from 'react-redux';
import c from './../constants';

function EditInviteeForm(props) {
  let _id = props.selectedInvitee;
  let _inviteeName = props.invitees[props.selectedInvitee].inviteeName;
  let _inviteeEmailAddress =
    props.invitees[props.selectedInvitee].inviteeEmailAddress;

  function handleEditInviteeFormSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: c.EDIT_INVITEE,
      id: _id,
      inviteeName: _inviteeName.value,
      inviteeEmailAddress: _inviteeEmailAddress.value
    };
    dispatch(action);
    props.onFormSubmit('invitees');
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
          <h1 className="pageTitle">UPDATE INVITEE</h1>
          <div>
            <form
              style={{
                width: '30%',
                padding: '5px 5px 5px 5px',
                border: '2px solid darkgreen',
                borderRadius: '4px'
              }}
              onSubmit={handleEditInviteeFormSubmission}
            >
              <label>&nbsp;&nbsp;Invitee Name:&nbsp;&nbsp;</label>
              <input
                type="text"
                id="inviteeName"
                defaultValue={_inviteeName}
                ref={input => {
                  _inviteeName = input;
                }}
              />
              <br />
              <label>Email Address:&nbsp;&nbsp;</label>
              <input
                type="text"
                id="inviteeEmailAddress"
                defaultValue={_inviteeEmailAddress}
                ref={input => {
                  _inviteeEmailAddress = input;
                }}
              />
              <br />
              <br />
              <button type="submit" className="button-main">
                UPDATE INVITEE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

EditInviteeForm.propTypes = {
  invitees: PropTypes.object,
  selectedInvitee: PropTypes.string,
  onFormSubmit: PropTypes.func
};

const mapStateToProps = state => {
  return {
    invitees: state.masterInvitees,
    selectedInvitee: state.selectedInvitee
  };
};

export default connect(mapStateToProps)(EditInviteeForm);
