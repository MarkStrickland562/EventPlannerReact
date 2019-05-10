import React from 'react';
import SideNav from './SideNav';
import Header from './Header';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import c from './../constants';

function AddMenuForm(props) {
  let _menuTheme = null;

  function handleNewMenuFormSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: c.ADD_MENU,
      id: v4(),
      menuTheme: _menuTheme.value
    };
    dispatch(action);
    _menuTheme = '';
    props.onFormSubmit('menus');
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
      `}
      </style>
      <div>
        <Header></Header>
        <SideNav></SideNav>
        <div className='page-content'>
          <h1 className='pageTitle'>ADD MENU</h1>
          <div>
            <form style={{ width: '30%', padding: '5px 5px 5px 5px', border: '2px solid darkgreen', borderRadius: '4px' }} onSubmit={handleNewMenuFormSubmission}>
              <label>&nbsp;Menu Theme: </label>
              <input
                type='text'
                id='menuTheme'
                ref={(input) => { _menuTheme = input; }} />
              <br></br><br></br>
              <button type='submit' className='button-main'>ADD MENU</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

AddMenuForm.propTypes = {
  onFormSubmit: PropTypes.func
};

export default connect()(AddMenuForm);
