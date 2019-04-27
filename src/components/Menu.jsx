import React from 'react';
import PropTypes from 'prop-types';

function Menu(props){
  return (
    <p>Menu: {props.menuTheme}<br></br></p>
  );
}

Menu.propTypes = {
  menuTheme: PropTypes.string.isRequired
};

export default Menu;
