import React from 'react';
import SideNav from './SideNav';
import Header from './Header';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addDish } from './../actions';

function AddDishForm(props) {
  let _menuItemDescription = null;

  function handleNewDishFormSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    dispatch(addDish(_menuItemDescription.value));
    _menuItemDescription = '';
    props.onFormSubmit('dishes');
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

          label: {
            font-size: 16px;
          }

          input {
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
          <h1 className='pageTitle'>ADD DISH</h1>
          <div>
            <form
              style={{
                width: '30%',
                padding: '5px 5px 5px 5px',
                border: '2px solid darkgreen',
                borderRadius: '4px'
              }}
              onSubmit={handleNewDishFormSubmission}
            >
              <label>&nbsp;Dish Name: </label>
              <input
                type='text'
                id='menuItemDescription'
                ref={input => {
                  _menuItemDescription = input;
                }}
              />
              <br />
              <br />
              <button type='submit' className='button-main'>
                ADD DISH
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

AddDishForm.propTypes = {
  dishes: PropTypes.object,
  onFormSubmit: PropTypes.func,
  dispatch: PropTypes.func
};

export default connect()(AddDishForm);
