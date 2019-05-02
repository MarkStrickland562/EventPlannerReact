import React from 'react';
import SideNav from './SideNav';
import Header from './Header';
// import { recipeKey } from './.api-keys';
// import { recipeID } from './.api-keys';

class RecipeSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: '',
      searchCount: '',
      recipes: []
    };
    this.getRecipes = this.getRecipes.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidUpdate() {
    this.getRecipes();
  }

  getRecipes() {
    fetch('https://api.edamam.com/search?q=beef&to=10&app_id=5eaad598&app_key=9be4954584201c119ddea7f92dc94f73')
    // fetch(`https://api.edamam.com/search?q=${this.state.searchString}&to=${this.searchCount}&app_id=${recipeID}&app_key=${recipeKey}`)
      .then(results => {
        this.setState({
          recipes: results.json().hits
        });
      });
  }

  handleInputChange() {
    this.setState({
      searchString: this.search.value,
      searchCount: this.count.value
    }, () => {
      this.getRecipes();
    });
  }

  render() {
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

          .parentColumn {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            width: 80%;
          }

          .column {
            height: 14vh;
            width: 25vw;;
            margin: 2px 2px 2px 2px;
            padding: 5px 5px 5px 5px;
            border: 2px solid black;
            border-radius: 4px;
            border-color: darkgreen;
            background-color: white;
            font-size: 18px;
          }

          label {
            fontsize: 16px;
          }

          input {
            font-size: 16px;
            color: darkgreen;
            font-weight: bold;
            width: 240px;
          }          
        `}
        </style>
        <div>
          <Header></Header>
          <SideNav></SideNav>
          <div className="page-content">
            <h1 className="pageTitle">SEARCH FOR RECIPES</h1>
            <div>
              <form style={{width: '50%', padding: '5px 5px 5px 5px', border: '2px solid darkgreen', borderRadius: '4px'}} onSubmit={this.handleInputChange}>
                <label>Enter a Search String: </label>
                <input
                  type='text'
                  ref={(input) => this.search = input}/>
                <br></br>
                <label>Enter the Number of Recipes to Display: </label>
                <input
                  type='number'
                  ref={(input) => this.count = input}/>
                <p>(default is 10)</p>
                <button type="submit" className="button-main">SEARCH</button>
                <p>{this.state.recipes}</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeSearch;
