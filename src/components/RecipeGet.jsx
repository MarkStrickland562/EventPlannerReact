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
    console.log('At GetRecipes');
    fetch(`https://api.edamam.com/search?q=beef&app_id=${recipeID}&app_key=${recipeKey}`)
      .then(results => {
        console.log('Here');
        return results.json();
      }).then(data => {
        console.log('Here');
        let recipes = data.results.recipes.hits.map((recipe) => {
          return(
            <div key={recipe.recipe.label}>
              <p>Looping</p>
              <img src={recipe.recipe.image} />
            </div>
          );
        // console.log(recipe);
        });
        this.setState({recipes: recipes});
        //        console.log('state', this.state.recipes);
      });
  }

  render() {
    return (
      <div>
        <p>Under Construction</p>
        {this.state.recipes}
      </div>
    );
  }
}

export default RecipeGet;