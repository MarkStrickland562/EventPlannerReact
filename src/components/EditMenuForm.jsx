import React from 'react';
import PropTypes from 'prop-types';
import SideNav from './SideNav';
import Header from './Header';

function EditMenuForm(props){

  let _menuTheme = props.selectedMenuProps.menu.menuTheme;

  var handleEditMenuFormSubmission = (event) => {
    event.preventDefault();
    props.onMenuUpdate({menuToUpdate: props.selectedMenu.menuId, menuTheme: _menuTheme.value});
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
          width: 300px;
        }
      `}
      </style>
      <div>
        <Header></Header>
        <SideNav></SideNav>
        <div className='page-content'>
          <h1 className='pageTitle'>UPDATE MENU</h1>
          <div>
            <form style={{width: '30%', padding: '5px 5px 5px 5px', border: '2px solid darkgreen', borderRadius: '4px'}} onSubmit={handleEditMenuFormSubmission}>
              <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Menu Name:&nbsp;&nbsp;</label>
              <input
                type='text'
                id='menuTheme'
                defaultValue={_menuTheme}
                ref={(input) => {_menuTheme = input;}}/>
              <br></br><br></br>
              <button type='submit' className='button-main'>UPDATE MENU</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

EditMenuForm.propTypes = {
  menus: PropTypes.object,
  selectedMenu: PropTypes.object,
  selectedMenuProps: PropTypes.object,
  onMenuUpdate: PropTypes.func
};

export default EditMenuForm;
