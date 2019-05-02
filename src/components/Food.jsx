import React from 'react';
import PropTypes from 'prop-types';

function Food(props){
  return (
    <p>&nbsp;Description: {props.ingredientDescription}<br></br>
       &nbsp;Menu Theme: {props.menuItemDescription}<br></br>
       &nbsp;Store Name: {props.storeName}</p>
  );
}

Food.propTypes = {
  ingredientDescription: PropTypes.string.isRequired,
  menuItemDescription: PropTypes.string.isRequired,
  storeName: PropTypes.string.isRequired
};

export default Food;