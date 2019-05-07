import React from 'react';
import PropTypes from 'prop-types';
import SideNav from './SideNav';
import Header from './Header';

function RecipeSearchForm(props) {
  let _searchString = null;
  let _searchCount = null;

  function handleSearchRecipeFormSubmission(event) {
    event.preventDefault();
    if (!_searchCount.value) {
      _searchCount.value = 10;
    }
    if (_searchString.value) {
      props.onRecipeSearch({searchString: _searchString.value, searchCount: _searchCount.value});
      _searchString = '';
      _searchCount = '';
    } else {
      alert('Search String is Required!');
    }
  }

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
            <form style={{width: '30%', padding: '5px 5px 5px 5px', border: '2px  solid darkgreen', borderRadius: '4px'}} onSubmit={handleSearchRecipeFormSubmission}>
              <label>Enter a Search String: </label>
              <input
                type='text'
                ref={(input) => {_searchString = input;}}/>
              <br></br><br></br>
              <label>Enter the Number of Recipes to Display: </label>
              <input style={{width: '100px'}}
                type='number'
                ref={(input) => {_searchCount = input;}}/>
              <br></br>
              (default is 10, limit is 100)
              <br></br><br></br>
              <button type="submit" className="button-main">SEARCH</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

RecipeSearchForm.propTypes = {
  onRecipeSearch: PropTypes.func
};

export default RecipeSearchForm;
