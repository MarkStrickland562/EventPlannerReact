import React from 'react';
import PropTypes from 'prop-types';
import SideNav from './SideNav';
import Header from './Header';

function EditInviteeForm(props){

  let _inviteeName = props.selectedInviteeProps.invitee.inviteeName;
  let _inviteeEmailAddress = props.selectedInviteeProps.invitee.inviteeEmailAddress;

  var handleEditInviteeFormSubmission = (event) => {
    event.preventDefault();
    props.onInviteeUpdate({inviteeToUpdate: props.selectedInvitee.inviteeId, inviteeName: _inviteeName.value, inviteeEmailAddress: _inviteeEmailAddress.value});
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
          <h1 className='pageTitle'>UPDATE INVITEE</h1>
          <div>
            <form style={{width: '30%', padding: '5px 5px 5px 5px', border: '2px solid darkgreen', borderRadius: '4px'}} onSubmit={handleEditInviteeFormSubmission}>
              <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Invitee Name:&nbsp;&nbsp;</label>
              <input
                type='text'
                id='inviteeName'
                defaultValue={_inviteeName}
                ref={(input) => {_inviteeName = input;}}/>
              <br></br>
              <label>Email Address:&nbsp;&nbsp;</label>
              <input
                type='text'
                id='inviteeEmailAddress'
                defaultValue={_inviteeEmailAddress}
                ref={(input) => {_inviteeEmailAddress = input;}}/>
              <br></br><br></br>
              <button type='submit' className='button-main'>UPDATE INVITEE</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

EditInviteeForm.propTypes = {
  selectedInvitee: PropTypes.object,
  selectedInviteeProps: PropTypes.object,
  onInviteeUpdate: PropTypes.func
};

export default EditInviteeForm;
