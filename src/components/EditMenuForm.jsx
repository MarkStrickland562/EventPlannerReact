import React from 'react';
import PropTypes from 'prop-types';
import SideNav from './SideNav';
import Header from './Header';
import { connect } from 'react-redux';
import { editMenu } from './../actions';

function EditMenuForm(props) {
  let _id = props.selectedMenu;
  let _menuTheme = props.menus[props.selectedMenu].menuTheme;

  function handleEditMenuFormSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    dispatch(editMenu(_id, _menuTheme.value));
    props.onFormSubmit('menus');
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
        `}
      </style>
      <div>
        <Header />
        <SideNav />
        <div className='page-content'>
          <h1 className='pageTitle'>UPDATE MENU</h1>
          <div>
            <form
              style={{
                width: '30%',
                padding: '5px 5px 5px 5px',
                border: '2px solid darkgreen',
                borderRadius: '4px'
              }}
              onSubmit={handleEditMenuFormSubmission}
            >
              <label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Menu Name:&nbsp;&nbsp;
              </label>
              <input
                type='text'
                id='menuTheme'
                defaultValue={_menuTheme}
                ref={input => {
                  _menuTheme = input;
                }}
              />
              <br />
              <br />
              <button type='submit' className='button-main'>
                UPDATE MENU
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

EditMenuForm.propTypes = {
  menus: PropTypes.object,
  selectedMenu: PropTypes.string,
  onFormSubmit: PropTypes.func,
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  return {
    menus: state.masterMenus,
    selectedMenu: state.selectedMenu
  };
};

export default connect(mapStateToProps)(EditMenuForm);
