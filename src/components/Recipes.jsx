import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SideNav from './SideNav';
import Header from './Header';
import Recipe from './Recipe';

function Recipes(props) {
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
            height: 22vh;
            width: 26vw;
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
        <div style={{ paddingRight: '5%' }} className='page-content'>
          <h1 className='pageTitle'>RECIPES</h1>
          <button type='button' className='button-main'>
            <Link className='link' to='/searchrecipes'>
              SEARCH AGAIN
            </Link>
          </button>
          <br />
          <div className='parentColumn'>
            {Object.keys(props.recipes).map(function(recipeId) {
              var recipe = props.recipes[recipeId];
              return (
                <div className='column' key={recipeId}>
                  <div>
                    <Recipe
                      recipeImage={recipe.recipe.image}
                      recipeUrl={recipe.recipe.url}
                      recipeLabel={recipe.recipe.label}
                      recipeId={recipe.recipeId}
                      key={recipeId}
                    />
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

Recipes.propTypes = {
  recipes: PropTypes.object
};

export default Recipes;
