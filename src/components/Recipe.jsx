import React from 'react';
import PropTypes from 'prop-types';

function Recipe(props){
  return (
    <div>
      <style jsx>{`>
        .image {
          border: 2px solid;
          border-color: darkgreen;
          border-radius: 4px;
        }
        `}
      </style>
      <div>
        <img className="image" src={props.recipeImage} style={{height: '40%',  width: '40%', border: '2px solid', borderColor: 'darkgreen', borderRadius: '4px'}}></img>     
        <br></br>
        <a className="externalLink" href={props.recipeUrl}>{props.recipeLabel}</a>
      </div>
    </div>
  );
}

Recipe.propTypes = {
  recipeImage: PropTypes.string.isRequired,
  recipeUrl: PropTypes.string.isRequired,
  recipeLabel: PropTypes.string.isRequired
};

export default Recipe;