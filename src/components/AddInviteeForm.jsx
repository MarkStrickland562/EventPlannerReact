import React from 'react';
import PropTypes from 'prop-types';
import SideNav from './SideNav';
import Header from './Header';

function AddInviteeForm(props){

  let _inviteeName = null;
  let _inviteeEmailAddress = null;

  function handleNewInviteeFormSubmission(event) {
    event.preventDefault();
    props.onNewInviteeCreation({inviteeName: _inviteeName.value, inviteeEmailAddress: _inviteeEmailAddress.value});
    _inviteeName = '';
    _inviteeEmailAddress = '';
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
          <h1 className='pageTitle'>ADD INVITEE</h1>
          <div>
            <form style={{width: '30%', padding: '5px 5px 5px 5px', border: '2px solid darkgreen', borderRadius: '4px'}} onSubmit={handleNewInviteeFormSubmission}>
              <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Invitee Name: </label>
              <input
                type='text'
                id='inviteeName'
                ref={(input) => {_inviteeName = input;}}/>
              <br></br>
              <label>Email Address: </label>
              <input
                type='text'
                id='inviteeEmailAddress'
                ref={(input) => {_inviteeEmailAddress = input;}}/>
              <br></br><br></br>
              <button type='submit' className='button-main'>ADD INVITEE</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

AddInviteeForm.propTypes = {
  onNewInviteeCreation: PropTypes.func
};

export default AddInviteeForm;
