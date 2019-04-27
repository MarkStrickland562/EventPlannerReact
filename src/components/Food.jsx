import React from 'react';
import PropTypes from 'prop-types';

function Food(props){
  return (
    <p>Description: {props.ingredientDescription}<br></br>Menu Item ID: {props.menuitemsId}<br></br>Store Id: {props.storeId}</p>
  );
}

Food.propTypes = {
  ingredientDescription: PropTypes.string.isRequired,
  menuitemsId: PropTypes.number.isRequired,
  storeId: PropTypes.number.isRequired
};

export default Food;