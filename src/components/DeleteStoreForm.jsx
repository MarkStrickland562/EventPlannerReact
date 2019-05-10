import React from 'react';
import PropTypes from 'prop-types';
import SideNav from './SideNav';
import Header from './Header';
import { connect } from 'react-redux';
import c from './../constants';

function DeleteStoreForm(props) {
  let _id = props.selectedStore;
  let _confirm = null;

  var handleDeleteStoreFormSubmission = (event) => {
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: c.DELETE_STORE,
      id: _id
    };

    if (_confirm.value === 'true') {
      dispatch(action);
    }
    props.onFormSubmit('stores');
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
          <h1 className="pageTitle">DELETE STORE</h1>
          <div>
            <form style={{ width: '15%', padding: '5px 5px 5px 5px', border: '2px solid darkgreen', borderRadius: '4px' }} onSubmit={handleDeleteStoreFormSubmission}>
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

DeleteStoreForm.propTypes = {
  selectedStore: PropTypes.object,
  onFormSubmit: PropTypes.func
};

const mapStateToProps = state => {
  return {
    selectedStore: state.selectedStore
  };
};

export default connect(mapStateToProps)(DeleteStoreForm);
