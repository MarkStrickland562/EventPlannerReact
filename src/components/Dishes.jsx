import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SideNav from './SideNav';
import Header from './Header';
import Dish from './Dish';
import { connect } from 'react-redux';

function Dishes(props) {
  function handleSavingSelectedDish(dishId) {
    const { dispatch } = props;
    const action = {
      type: 'SELECT_DISH',
      dishId: dishId
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
            height: 10vh;
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
        <div className="page-content">
          <h1 className="pageTitle">DISHES</h1>
          <div>
            <button type="button" className="button-main">
              <Link className="link" to="/adddish">
                ADD DISH
              </Link>
            </button>
            <button type="button" className="button-main">
              <Link className="link" to="/searchdishes">
                SEARCH DISHES
              </Link>
            </button>
            <br />
            <br />
          </div>
          <div className="parentColumn">
            {Object.keys(props.dishes).map(function(dishId) {
              var dish = props.dishes[dishId];
              return (
                <div className="column" key={dishId}>
                  <div>
                    <Dish
                      menuItemDescription={dish.menuItemDescription}
                      dishId={dish.dishId}
                      key={dishId}
                    />
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        handleSavingSelectedDish(dishId);
                      }}
                      type="button"
                      className="button-main"
                    >
                      <Link className="link" to="/deletedish">
                        DELETE
                      </Link>
                    </button>
                    <button
                      onClick={() => {
                        handleSavingSelectedDish(dishId);
                      }}
                      type="button"
                      className="button-main"
                    >
                      <Link className="link" to="/editdish">
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

Dishes.propTypes = {
  dishes: PropTypes.object
};

export default connect()(Dishes);
