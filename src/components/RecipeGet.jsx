import React, { Component } from 'react';
import { recipeKey } from './.api-keys';
import { recipeID } from './.api-keys';

class RecipeGet extends Component {
  constructor() {
    super();
    this.state = {
      recipes: []
    };
  }

  componentDidMount() {
    this.GetRecipes();
  }

  GetRecipes() {
    fetch(`https://api.edamam.com/search?q=beef&app_id=${recipeID}&app_key=${recipeKey}`)
      .then(results => {
          return results.json();
        }).then(data => {
          this.setState({ recipes: data.hits });
          console.log(data);
        });
  }

  render() {
    const recipes = this.state.recipes.map((recipe) => 
      (
        <div key={recipe.recipe.label}>
           <img src={recipe.recipe.image} />
        </div>
      ));
 
    return (
      <div>
        { recipes }
      </div>
    );
  }
}

export default RecipeGet;