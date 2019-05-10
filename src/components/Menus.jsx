import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SideNav from './SideNav';
import Header from './Header';
import Menu from './Menu';
import { connect } from 'react-redux';

function Menus(props) {
  function handleSavingSelectedMenu(menuId) {
    const { dispatch } = props;
    const action = {
      type: 'SELECT_MENU',
      menuId: menuId
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
          <h1 className="pageTitle">MENUS</h1>
          <div>
            <button type="button" className="button-main">
              <Link className="link" to="/addMenu">
                ADD MENU
              </Link>
            </button>
            <button type="button" className="button-main">
              <Link className="link" to="/searchMenus">
                SEARCH MENUS
              </Link>
            </button>
            <br />
            <br />
          </div>
          <div className="parentColumn">
            {Object.keys(props.menus).map(function(menuId) {
              var menu = props.menus[menuId];
              return (
                <div className="column" key={menuId}>
                  <div>
                    <Menu
                      menuTheme={menu.menuTheme}
                      menuId={menu.menuId}
                      key={menuId}
                    />
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        handleSavingSelectedMenu(menuId);
                      }}
                      type="button"
                      className="button-main"
                    >
                      <Link className="link" to="/deletemenu">
                        DELETE
                      </Link>
                    </button>
                    <button
                      onClick={() => {
                        handleSavingSelectedMenu(menuId);
                      }}
                      type="button"
                      className="button-main"
                    >
                      <Link className="link" to="/editmenu">
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

Menus.propTypes = {
  menus: PropTypes.object,
  onMenuSelection: PropTypes.string
};

export default connect()(Menus);
