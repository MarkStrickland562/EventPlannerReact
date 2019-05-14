import React from 'react';
import PropTypes from 'prop-types';
import SideNav from './SideNav';
import Header from './Header';
import { connect } from 'react-redux';
import constants from './../../src/constants';
const { c } = constants;

function EditStoreForm(props) {
  let _id = props.selectedStore;
  let _storeName = props.stores[props.selectedStore].storeName;

  function handleEditStoreFormSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: c.EDIT_STORE,
      id: _id,
      storeName: _storeName.value
    };
    dispatch(action);
    props.onFormSubmit('stores');
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

          label {
            font-size: 16px;
          }

          input {
            font-size: 16px;
            color: darkgreen;
            font-weight: bold;
            width: 300px;
          }

          select {
            font-size: 16px;
            color: darkgreen;
            font-weight: bold;
            width: 300px;
          }

          option {
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
        <div className="page-content">
          <h1 className="pageTitle">UPDATE STORE</h1>
          <div>
            <form
              style={{
                width: '30%',
                padding: '5px 5px 5px 5px',
                border: '2px solid darkgreen',
                borderRadius: '4px'
              }}
              onSubmit={handleEditStoreFormSubmission}
            >
              <label>Store Name:&nbsp;&nbsp;</label>
              <input
                type="text"
                id="storeName"
                defaultValue={_storeName}
                ref={input => {
                  _storeName = input;
                }}
              />
              <br />
              <br />
              <button type="submit" className="button-main">
                UPDATE STORE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

EditStoreForm.propTypes = {
  stores: PropTypes.object,
  selectedStore: PropTypes.string,
  onFormSubmit: PropTypes.func
};

const mapStateToProps = state => {
  return {
    stores: state.masterStores,
    selectedStore: state.selectedStore
  };
};

export default connect(mapStateToProps)(EditStoreForm);
