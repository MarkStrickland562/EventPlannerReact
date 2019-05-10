import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SideNav from './SideNav';
import Header from './Header';
import Store from './Store';
import { connect } from 'react-redux';

function Stores(props) {
  function handleSavingSelectedStore(storeId) {
    const { dispatch } = props;
    const action = {
      type: 'SELECT_STORE',
      storeId: storeId
    };
    dispatch(action);
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

          .parentColumn {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            width: 80%;
          }

          .column {
            height: 10vh;
            width: 25vw;
            margin: 2px 2px 2px 2px;
            padding: 5px 5px 5px 5px;
            border: 2px solid black;
            border-radius: 4px;
            border-color: darkgreen;
            background-color: white;
            font-size: 18px;
          }
        `}
      </style>
      <div>
        <Header />
        <SideNav />
        <div className="page-content">
          <h1 className="pageTitle">STORES</h1>
          <div>
            <button type="button" className="button-main">
              <Link className="link" to="/addstore">
                ADD STORE
              </Link>
            </button>
            <button type="button" className="button-main">
              <Link className="link" to="/searchstores">
                SEARCH STORES
              </Link>
            </button>
            <br />
            <br />
          </div>
          <div className="parentColumn">
            {Object.keys(props.stores).map(function(storeId) {
              var store = props.stores[storeId];
              return (
                <div className="column" key={storeId}>
                  <div>
                    <Store
                      storeName={store.storeName}
                      storeId={store.storeId}
                      key={storeId}
                    />
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        handleSavingSelectedStore(storeId);
                      }}
                      type="button"
                      className="button-main"
                    >
                      <Link className="link" to="/deletestore">
                        DELETE
                      </Link>
                    </button>
                    <button
                      onClick={() => {
                        handleSavingSelectedStore(storeId);
                      }}
                      type="button"
                      className="button-main"
                    >
                      <Link className="link" to="/editstore">
                        UPDATE
                      </Link>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

Stores.propTypes = {
  stores: PropTypes.object
};

export default connect()(Stores);
