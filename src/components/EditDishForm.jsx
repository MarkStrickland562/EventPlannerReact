import React from 'react';
import PropTypes from 'prop-types';
import SideNav from './SideNav';
import Header from './Header';
import { connect } from 'react-redux';
import c from './../constants';

function EditDishForm(props) {
  let _id = props.selectedDish;
  let _menuItemDescription = props.dishes[props.selectedDish].menuItemDescription;

  function handleEditDishFormSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: c.EDIT_EVENT,
      id: _id,
      menuItemDescription: _menuItemDescription.value
    };
    dispatch(action);
    props.onFormSubmit('dishes');
  }

  return (
    <div>
      <style jsx>{`>
        .pageTitle {
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
          width: 240px;
        }

        select {
          font-size: 16px;
          color: darkgreen;
          font-weight: bold;
        }

        option {
          font-size: 16px;
          color: darkgreen;
          font-weight: bold;
          width: 240px;
        }
`}
      </style>
      <div>
        <Header></Header>
        <SideNav></SideNav>
        <div className='page-content'>
          <h1 className='pageTitle'>UPDATE DISH</h1>
          <div>
            <form style={{ width: '30%', padding: '5px 5px 5px 5px', border: '2px solid darkgreen', borderRadius: '4px' }} onSubmit={handleEditDishFormSubmission}>
              <label>Dish Description:&nbsp;&nbsp;</label>
              <input
                type='text'
                id='menuItemDescription'
                defaultValue={_menuItemDescription}
                ref={(input) => { _menuItemDescription = input; }} />
              <br></br><br></br>
              <button type='submit' className='button-main'>UPDATE DISH</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

EditDishForm.propTypes = {
  dishes: PropTypes.object,
  selectedDish: PropTypes.object,
  onFormSubmit: PropTypes.func
};

const mapStateToProps = state => {
  return {
    dishes: state.masterDishes,
    selectedDish: state.selectedDish
  };
};


export default connect(mapStateToProps)(EditDishForm);
