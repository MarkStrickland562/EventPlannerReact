import React from 'react';
import PropTypes from 'prop-types';

function Food(props){
  return (
    <p>&nbsp;Description: {props.ingredientDescription}<br></br>
       &nbsp;Dish: {props.menuItemDescription}<br></br>
       &nbsp;Store: {props.storeName}</p>
  );
}

Food.propTypes = {
  ingredientDescription: PropTypes.string.isRequired,
  menuItemDescription: PropTypes.string.isRequired,
  storeName: PropTypes.string.isRequired
};

export default Food;
