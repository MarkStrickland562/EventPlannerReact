import React from 'react';
import { Link } from 'react-router-dom';
import FoodData from './FoodData';
import SideNav from './SideNav';
import Header from './Header';
import Food from './Food';

function Foods(){
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
          height: 18vh;
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
          <h1 className="pageTitle">FOODS</h1>
          <div>
            <button type="button" className="button-main"><Link className="link" to="/addfood">ADD FOOD</Link></button>
            <button type="button" className="button-main"><Link className="link" to="/searchfoods">SEARCH FOODS</Link></button>
            <br></br><br></br>
          </div>
          <div className="parentColumn">
            {FoodData.map((food, index) =>
              <div className="column">
                <div>
                  <Food ingredientDescription={food.ingredientDescription}
                    menuitemsId={food.menuitemsId}
                    storeId ={food.storeId}
                    key={index}/>
                </div>
                <div>
                  <button type="button" className="button-main"><Link className="link" to="/deletefood">DELETE</Link></button>
                  <button type="button" className="button-main"><Link className="link" to="/editfood">UPDATE</Link></button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Foods;

