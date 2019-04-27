import React from 'react';
import { Link } from 'react-router-dom';
import DishData from './DishData';
import SideNav from './SideNav';
import Header from './Header';
import Dish from './Dish';

function Dishes(){
  return (
    <div>
      <style jsx>{`>
        .pageTitle {
          font-size: 30px;
          font-family: 'Luckiest Guy', cursive;
          margin-top: 2%;
          color: darkgreen;
        }

        .page-content {
          width: 100%;
          font-family: 'Luckiest Guy', cursive;
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
          width: 25vw;;
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
        <Header></Header>
        <SideNav></SideNav>
        <div className="page-content">
          <h1 className="pageTitle">DISHES</h1>
          <div>
            <button type="button" className="button-main"><Link className="link" to="/addevent">ADD DISH</Link></button>
            <button type="button" className="button-main"><Link className="link" to="/searchevents">SEARCH DISHES</Link></button>
            <br></br><br></br>
          </div>
          <div className="parentColumn">
            {DishData.map((dish, index) =>
              <div className="column">
                <div>
                  <Dish menuItemDescription={dish.menuItemDescription}
                    key={index}/>
                </div>
                <div>
                  <button type="button" className="button-main"><Link className="link" to="/deletedish">DELETE</Link></button>
                  <button type="button" className="button-main"><Link className="link" to="/editdish">UPDATE</Link></button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dishes;
