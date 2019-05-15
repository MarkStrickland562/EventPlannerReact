import React from 'react';
import SideNav from './SideNav';
import Header from './Header';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addStore } from './../actions';

function AddStoreForm(props) {
  let _storeName = null;

  function handleNewStoreFormSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    dispatch(addStore(_storeName.value));
    _storeName = '';
    props.onFormSubmit('stores');
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
        <Header />
        <SideNav />
        <div className='page-content'>
          <h1 className='pageTitle'>ADD STORE</h1>
          <div>
            <form
              style={{
                width: '30%',
                padding: '5px 5px 5px 5px',
                border: '2px solid darkgreen',
                borderRadius: '4px'
              }}
              onSubmit={handleNewStoreFormSubmission}
            >
              <label>&nbsp;Store Name: </label>
              <input
                type='text'
                id='storeName'
                ref={input => {
                  _storeName = input;
                }}
              />
              <br />
              <br />
              <button type='submit' className='button-main'>
                ADD STORE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

AddStoreForm.propTypes = {
  onFormSubmit: PropTypes.func,
  dispatch: PropTypes.func
};

export default connect()(AddStoreForm);
