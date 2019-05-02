import React from 'react';
import PropTypes from 'prop-types';
import SideNav from './SideNav';
import Header from './Header';

function EditStoreForm(props){

  let _storeName = props.selectedStoreProps.store.storeName;

  var handleEditStoreFormSubmission = (event) => {
    event.preventDefault();
    props.onStoreUpdate({storeToUpdate: props.selectedStore.storeId, storeName: _storeName.value});
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
        <Header></Header>
        <SideNav></SideNav>
        <div className='page-content'>
          <h1 className='pageTitle'>UPDATE STORE</h1>
          <div>
            <form style={{width: '30%', padding: '5px 5px 5px 5px', border: '2px solid darkgreen', borderRadius: '4px'}} onSubmit={handleEditStoreFormSubmission}>
              <label>Store Name:&nbsp;&nbsp;</label>
              <input
                type='text'
                id='storeName'
                defaultValue={_storeName}
                ref={(input) => {_storeName = input;}}/>
              <br></br><br></br>
              <button type='submit' className='button-main'>UPDATE STORE</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

EditStoreForm.propTypes = {
  selectedStore: PropTypes.object,
  selectedStoreProps: PropTypes.object,
  onStoreUpdate: PropTypes.func
};

export default EditStoreForm;
