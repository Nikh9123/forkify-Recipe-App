import * as model from './model.js';
import { MODEL_CLOSE_SEC } from './config.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarkView from './views/bookmarkView.js';
import addRecipeView from './views/addRecipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
///////////////////////////////////////

// if(module.hot){
//   module.hot.accept();
// }

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    //0) Update results view to mark selected results
    resultsView.update(model.getSearchResultspage());
    // resultsView.render(model.getSearchResultspage());

    //3) updating bookmarks view
    bookmarkView.update(model.state.bookmarks);

    //1) loading recipe
    await model.loadRecipe(id);

    //2) rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
    console.error(err);
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    //1) get search query
    const query = searchView.getQuery();
    if (!query) return;

    //2) get load search results
    await model.loadSearchResult(query);

    //3) render results
    // resultsView.render(model.state.search.results);
    resultsView.render(model.getSearchResultspage());

    //4)render initial paginaton buttons
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function (goToPage) {
  //1) render new results
  resultsView.render(model.getSearchResultspage(goToPage));

  //2)render new paginaton buttons
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  //1) update the recipe serving  (in state)
  model.updateServings(newServings);

  //2) update the recipe view
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  //1) ADD OR REMOVE BOOKMARKS
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  //2) UPDATE RECIPE VIEW
  recipeView.update(model.state.recipe);

  //3) RENDER BOOKMARKS
  bookmarkView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarkView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    //0) SHOW LOADING SPINNER
    addRecipeView.renderSpinner();

    //1) UPLOAD THE NEW RECIPE
    await model.uploadRecipe(newRecipe);
    console.log(model.state.recipe);

    //2) RENDER RECIPE
    recipeView.render(model.state.recipe);

    //3) SUCCESS MESAAGE FOR UPLOADING RECIPE
    addRecipeView.renderMessage();

    //4) RENDER BOOKMARK
    bookmarkView.render(model.state.bookmarks);

    //CHANGE ID IN URL
    window.history.pushState(null, '', `#{model.state.recipe.id}`);
    window.history.back();  

    //5) CLOSE FORM WINDOW
    setTimeout(function () {
      addRecipeView.toggleWindow();
    }, MODEL_CLOSE_SEC * 1000);
  } catch (err) {
    console.log('❌❌', err);
    addRecipeView.renderError(err.message);
  }
};

const newFeature = function(){
  console.log('New Feature Added');
}

const init = function () {
  bookmarkView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
  newFeature();
};
init();
