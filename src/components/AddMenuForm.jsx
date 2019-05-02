import React from 'react';
import PropTypes from 'prop-types';
import SideNav from './SideNav';
import Header from './Header';

function AddMenuForm(props){

  let _menuTheme = null;

  function handleNewMenuFormSubmission(event) {
    event.preventDefault();
    props.onNewMenuCreation({menuTheme: _menuTheme.value});
    _menuTheme = '';
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
          <h1 className='pageTitle'>ADD MENU</h1>
          <div>
            <form style={{width: '30%', padding: '5px 5px 5px 5px', border: '2px solid darkgreen', borderRadius: '4px'}} onSubmit={handleNewMenuFormSubmission}>
              <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Menu Theme: </label>
              <input
                type='text'
                id='menuTheme'
                ref={(input) => {_menuTheme = input;}}/>
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
  menus: PropTypes.object,
  onNewMenuCreation: PropTypes.func
};

export default AddMenuForm;
