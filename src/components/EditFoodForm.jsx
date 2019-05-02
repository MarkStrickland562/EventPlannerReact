import React from 'react';
import PropTypes from 'prop-types';
import SideNav from './SideNav';
import Header from './Header';

function EditFoodForm(props){

  let _ingredientDescription = props.selectedFoodProps.food.ingredientDescription;
  let _dishId = props.selectedFoodProps.food.menuItemsId;
  let _storeId = props.selectedFoodProps.food.storeId;

  var handleEditFoodFormSubmission = (event) => {
    event.preventDefault();
    props.onFoodUpdate({foodToUpdate: props.selectedFood.foodId, ingredientDescription: _ingredientDescription.value, menuItemsId: _dishId.value, storeId: _storeId.value});
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
        <Header></Header>
        <SideNav></SideNav>
        <div className='page-content'>
          <h1 className='pageTitle'>UPDATE FOOD</h1>
          <div>
            <form style={{width: '30%', padding: '5px 5px 5px 5px', border: '2px solid darkgreen', borderRadius: '4px'}} onSubmit={handleEditFoodFormSubmission}>
              <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Food Name:&nbsp;&nbsp;</label>
              <input
                type='text'
                id='ingredientDescription'
                defaultValue={_ingredientDescription}
                ref={(input) => {_ingredientDescription = input;}}/>
              <br></br>
              <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dish: </label>
              <select ref={(input) => {_dishId = input;}}>
                {Object.keys(props.dishes).map(function(dishId) {
                  var dish = props.dishes[dishId];
                  if (dishId == _dishId) {
                    return <option selected={dish.menuItemDescription} defaultValue={dishId} key={dishId} value={dishId}>{dish.menuItemDescription}</option>;
                  } else {
                    return <option key={dishId} value={dishId}>{dish.menuItemDescription}</option>;
                  }
                })}
              </select>
              <br></br>
              <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Store: </label>
              <select ref={(input) => {_storeId = input;}}>
                {Object.keys(props.stores).map(function(storeId) {
                  var store = props.stores[storeId];
                  if (storeId == _storeId) {
                    return <option selected={store.storeName} defaultValue={storeId} key={storeId} value={storeId}>{store.storeName}</option>;
                  } else {
                    return <option key={storeId} value={storeId}>{store.storeName}</option>;
                  }
                })}
              </select>
              <br></br><br></br>
              <button type='submit' className='button-main'>UPDATE FOOD</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

EditFoodForm.propTypes = {
  dishes: PropTypes.object,
  stores: PropTypes.object,
  selectedFood: PropTypes.object,
  selectedFoodProps: PropTypes.object,
  onFoodUpdate: PropTypes.func
};

export default EditFoodForm;
