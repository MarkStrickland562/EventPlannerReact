import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SideNav from './SideNav';
import Header from './Header';
import Invitee from './Invitee';
import { connect } from 'react-redux';

function Invitees(props) {
  function handleSavingSelectedInvitee(inviteeId) {
    const { dispatch } = props;
    const action = {
      type: 'SELECT_INVITEE',
      inviteeId: inviteeId
    };
    dispatch(action);
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

          .parentColumn {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            width: 80%;
          }

          .column {
            height: 12vh;
            width: 25vw;
            margin: 2px 2px 2px 2px;
            padding: 5px 5px 5px 5px;
            border: 2px solid black;
            border-radius: 4px;
            border-color: darkgreen;
            background-color: white;
            font-size: 18px;
          }
        `}
      </style>
      <div>
        <Header />
        <SideNav />
        <div className='page-content'>
          <h1 className='pageTitle'>INVITEES</h1>
          <div>
            <button type='button' className='button-main'>
              <Link className='link' to='/addinvitee'>
                ADD INVITEE
              </Link>
            </button>
            <button type='button' className='button-main'>
              <Link className='link' to='/searchinvitees'>
                SEARCH INVITEES
              </Link>
            </button>
            <br />
            <br />
          </div>
          <div className='parentColumn'>
            {Object.keys(props.invitees).map(function(inviteeId) {
              var invitee = props.invitees[inviteeId];
              return (
                <div className='column' key={inviteeId}>
                  <div>
                    <Invitee
                      inviteeName={invitee.inviteeName}
                      inviteeEmailAddress={invitee.inviteeEmailAddress}
                      inviteeId={invitee.inviteeId}
                      key={inviteeId}
                    />
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        handleSavingSelectedInvitee(inviteeId);
                      }}
                      type='button'
                      className='button-main'
                    >
                      <Link className='link' to='/deleteinvitee'>
                        DELETE
                      </Link>
                    </button>
                    <button
                      onClick={() => {
                        handleSavingSelectedInvitee(inviteeId);
                      }}
                      type='button'
                      className='button-main'
                    >
                      <Link className='link' to='/editinvitee'>
                        UPDATE
                      </Link>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

Invitees.propTypes = {
  invitees: PropTypes.object,
  dispatch: PropTypes.func
};

export default connect()(Invitees);
