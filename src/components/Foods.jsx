import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SideNav from './SideNav';
import Header from './Header';
import Food from './Food';
import { connect } from 'react-redux';

function Foods(props) {
  function handleSavingSelectedFood(foodId) {
    const { dispatch } = props;
    const action = {
      type: 'SELECT_FOOD',
      foodId: foodId
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
            height: 16vh;
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
          <h1 className='pageTitle'>FOODS</h1>
          <div>
            <button type='button' className='button-main'>
              <Link className='link' to='/addfood'>
                ADD FOOD
              </Link>
            </button>
            <button type='button' className='button-main'>
              <Link className='link' to='/searchfoods'>
                SEARCH FOODS
              </Link>
            </button>
            <br />
            <br />
          </div>
          <div className='parentColumn'>
            {Object.keys(props.foods).map(function(foodId) {
              var food = props.foods[foodId];
              var dish = props.dishes[food.menuItemsId];
              var store = props.stores[food.storeId];
              return (
                <div className='column' key={foodId}>
                  <div>
                    <Food
                      ingredientDescription={food.ingredientDescription}
                      menuItemsId={food.menuItemsId}
                      storeId={food.storeId}
                      menuItemDescription={dish.menuItemDescription}
                      storeName={store.storeName}
                      foodId={food.foodId}
                      key={foodId}
                    />
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        handleSavingSelectedFood(foodId);
                      }}
                      type='button'
                      className='button-main'
                    >
                      <Link className='link' to='/deletefood'>
                        DELETE
                      </Link>
                    </button>
                    <button
                      onClick={() => {
                        handleSavingSelectedFood(foodId);
                      }}
                      type='button'
                      className='button-main'
                    >
                      <Link className='link' to='/editfood'>
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

Foods.propTypes = {
  foods: PropTypes.object,
  dishes: PropTypes.object,
  stores: PropTypes.object,
  dispatch: PropTypes.func
};

export default connect()(Foods);
