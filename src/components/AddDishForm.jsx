import React from 'react';
import PropTypes from 'prop-types';
import SideNav from './SideNav';
import Header from './Header';

function AddDishForm(props){

  let _menuItemIngredient = null;

  function handleNewDishFormSubmission(event) {
    event.preventDefault();
    props.onNewDishCreation({menuItemIngredient: _menuItemIngredient.value});
    _menuItemIngredient = '';
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
          <h1 className='pageTitle'>ADD DISH</h1>
          <div>
            <form style={{width: '30%', padding: '5px 5px 5px 5px', border: '2px solid darkgreen', borderRadius: '4px'}} onSubmit={handleNewDishFormSubmission}>
              <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dish Name: </label>
              <input
                type='text'
                id='menuItemIngredient'
                ref={(input) => {_menuItemIngredient = input;}}/>
              <br></br><br></br>
              <button type='submit' className='button-main'>ADD DISH</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

AddDishForm.propTypes = {
  dishes: PropTypes.object,
  onNewDishCreation: PropTypes.func
};

export default AddDishForm;
