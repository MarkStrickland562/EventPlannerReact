import React from 'react';
import PropTypes from 'prop-types';

function Dish(props){
  return (
    <p>Dish: {props.menuItemDescription}<br></br></p>
  );
}

Dish.propTypes = {
  menuItemDescription: PropTypes.string.isRequired
};

export default Dish;