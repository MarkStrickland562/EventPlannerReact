import React from 'react';
import PropTypes from 'prop-types';
import SideNav from './SideNav';
import Header from './Header';
import { connect } from 'react-redux';
import { editFood } from './../actions';

function EditFoodForm(props) {
  let _id = props.selectedFood;
  let _ingredientDescription =
    props.foods[props.selectedFood].ingredientDescription;
  let _dishId = props.foods[props.selectedFood].menuItemsId;
  let _storeId = props.foods[props.selectedFood].storeId;

  function handleEditFoodFormSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    dispatch(
      editFood(_id, _ingredientDescription.value, _dishId.value, _storeId.value)
    );
    props.onFormSubmit('foods');
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
          <h1 className='pageTitle'>UPDATE FOOD</h1>
          <div>
            <form
              style={{
                width: '30%',
                padding: '5px 5px 5px 5px',
                border: '2px solid darkgreen',
                borderRadius: '4px'
              }}
              onSubmit={handleEditFoodFormSubmission}
            >
              <label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Food Name:&nbsp;&nbsp;
              </label>
              <input
                type='text'
                id='ingredientDescription'
                defaultValue={_ingredientDescription}
                ref={input => {
                  _ingredientDescription = input;
                }}
              />
              <br />
              <label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dish:{' '}
              </label>
              <select
                ref={input => {
                  _dishId = input;
                }}
              >
                {Object.keys(props.dishes).map(function(dishId) {
                  var dish = props.dishes[dishId];
                  if (dishId == _dishId) {
                    return (
                      <option
                        selected={dish.menuItemDescription}
                        defaultValue={dishId}
                        key={dishId}
                        value={dishId}
                      >
                        {dish.menuItemDescription}
                      </option>
                    );
                  } else {
                    return (
                      <option key={dishId} value={dishId}>
                        {dish.menuItemDescription}
                      </option>
                    );
                  }
                })}
              </select>
              <br />
              <label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Store:{' '}
              </label>
              <select
                ref={input => {
                  _storeId = input;
                }}
              >
                {Object.keys(props.stores).map(function(storeId) {
                  var store = props.stores[storeId];
                  if (storeId == _storeId) {
                    return (
                      <option
                        selected={store.storeName}
                        defaultValue={storeId}
                        key={storeId}
                        value={storeId}
                      >
                        {store.storeName}
                      </option>
                    );
                  } else {
                    return (
                      <option key={storeId} value={storeId}>
                        {store.storeName}
                      </option>
                    );
                  }
                })}
              </select>
              <br />
              <br />
              <button type='submit' className='button-main'>
                UPDATE FOOD
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

EditFoodForm.propTypes = {
  foods: PropTypes.object,
  dishes: PropTypes.object,
  stores: PropTypes.object,
  selectedFood: PropTypes.string,
  onFormSubmit: PropTypes.func,
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  return {
    foods: state.masterFoods,
    dishes: state.masterDishes,
    stores: state.masterStores,
    selectedFood: state.selectedFood
  };
};

export default connect(mapStateToProps)(EditFoodForm);
