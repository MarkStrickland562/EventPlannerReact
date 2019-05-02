import React from 'react';
import PropTypes from 'prop-types';
import SideNav from './SideNav';
import Header from './Header';

function AddFoodForm(props){

  let _ingredientDescription = null;
  let _dishId = null;
  let _storeId = null;

  function handleNewFoodFormSubmission(event) {
    event.preventDefault();
    props.onNewFoodCreation({ingredientDescription: _ingredientDescription.value, menuItemsId: _dishId.value, storeId: _storeId.value});
    _ingredientDescription = '';
    _dishId = null;
    _storeId = null;
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
          <h1 className='pageTitle'>ADD FOOD</h1>
          <div>
            <form style={{width: '30%', padding: '5px 5px 5px 5px', border: '2px solid darkgreen', borderRadius: '4px'}} onSubmit={handleNewFoodFormSubmission}>
              <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Description: </label>
              <input
                type='text'
                id='ingredientDescription'
                ref={(input) => {_ingredientDescription = input;}}/>
              <br></br>
              <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dish: </label>
              <select ref={(input) => {_dishId = input;}}>
                {Object.keys(props.dishes).map(function(dishId) {
                  var dish = props.dishes[dishId];
                  return <option key={dishId} value={dishId}>{dish.menuItemDescription}</option>;
                })}
              </select>
              <br></br>
              <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Store: </label>
              <select ref={(input) => {_storeId = input;}}>
                {Object.keys(props.stores).map(function(storeId) {
                  var store = props.stores[storeId];
                  return <option key={storeId} value={storeId}>{store.storeName}</option>;
                })}
              </select>
              <br></br><br></br>
              <button type='submit' className='button-main'>ADD FOOD</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

AddFoodForm.propTypes = {
  dishes: PropTypes.object,
  stores: PropTypes.object,
  onNewFoodCreation: PropTypes.func
};

export default AddFoodForm;
