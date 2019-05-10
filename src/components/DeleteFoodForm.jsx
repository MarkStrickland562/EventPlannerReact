import React from 'react';
import PropTypes from 'prop-types';
import SideNav from './SideNav';
import Header from './Header';
import {
  connect
} from 'react-redux';
import c from './../constants';
function DeleteFoodForm(props) {
  let _id = props.selectedFood;
  let _confirm = null;

  var handleDeleteFoodFormSubmission = (event) => {
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: c.DELETE_FOOD,
      id: _id
    };

    if (_confirm.value === 'true') {
      dispatch(action);
    }
    props.onFormSubmit('foods');
  };

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
          fontsize: 16px;
        }

        select {
          font-size: 16px;
          color: darkgreen;
          font-weight: bold;
        }
      `}
      </style>
      <div>
        <Header></Header>
        <SideNav></SideNav>
        <div className="page-content">
          <h1 className="pageTitle">DELETE FOOD</h1>
          <div>
            <form style={{ width: '15%', padding: '5px 5px 5px 5px', border: '2px solid darkgreen', borderRadius: '4px' }} onSubmit={handleDeleteFoodFormSubmission}>
              <label>Confirm Delete: </label>
              <select ref={(input) => { _confirm = input; }}>
                <option value="undefined" disabled></option>
                <option value="false">No</option>
                <option value="true">Yes</option>
              </select>
              &nbsp;
              <button type='submit' className="button-main">CONFIRM</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

DeleteFoodForm.propTypes = {
  selectedFood: PropTypes.object,
  onFormSubmit: PropTypes.func
};

const mapStateToProps = state => {
  return {
    selectedFood: state.selectedFood
  };
};

export default connect(mapStateToProps)(DeleteFoodForm);
