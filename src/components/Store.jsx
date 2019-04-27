import React from 'react';
import PropTypes from 'prop-types';

function Store(props){
  return (
    <p>Store Name: {props.storeName}<br></br></p>
  );
}

Store.propTypes = {
  storeName: PropTypes.string.isRequired
};

export default Store;