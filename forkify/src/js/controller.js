import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultView from './resultView.js';
import paginationView from './views/paginationView.js';

// importing icons
// import icons from '../img/icons.svg' works this way in parcel 1
// importing icons in parcel 2
import icons from 'url:../img/icons.svg';

// Parent container for the recipe section
const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
// Creating a loading spinner
/*const renderSpinner = function (parentEl) {
  onst markup =
    // the svg used here has been animated in the css file, causing the svg file to rotate. components.SCSS: Line 170 - 190
    `
    <div class="spinner">
            <svg>
              <use href="${icons}#icon-loader"></use> 
            </svg>
    </div>
  `;
  parentEl.innerHTML = ' ';
  parentEl.insertAdjacentHTML('afterbegin', markup);
};
*/

const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1); // window.location rep the entire url on the browser
    console.log(id);

    if (!id) return;

    // 1) Loading Recipe
    // Application of the loading spinner
    recipeView.renderSpinner();

    await model.loadRecipe(id); //mvc refactoring
    const { recipe } = model.state;
    /*
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    const data = await res.json();

    // Handling error
    if (!res.ok) {
      // data.message is coming from the res.json() data
      throw new Error(`${data.message} (${res.status})`);
    }

    console.log(res);
    console.log(data);

    // Reformatting the data property names
    // let recipe = data.data.recipe
    let { recipe } = data.data;
    recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };

    console.log(recipe);
    */

    // 2) Rendering recipe
    recipeView.render(model.state.recipe);

    /*
    const markup = `
            
    <figure class="recipe__fig">
    <img src="${recipe.image}" alt="${recipe.title}" class="recipe__img" />
    <h1 class="recipe__title">
      <span>${recipe.title}</span>
    </h1>
  </figure>

  <div class="recipe__details">
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${icons}#icon-clock"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--minutes">${
        recipe.cookingTime
      }</span>
      <span class="recipe__info-text">minutes</span>
    </div>
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${icons}#icon-users"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--people">${
        recipe.servings
      }</span>
      <span class="recipe__info-text">servings</span>

      <div class="recipe__info-buttons">
        <button class="btn--tiny btn--increase-servings">
          <svg>
            <use href="${icons}#icon-minus-circle"></use>
          </svg>
        </button>
        <button class="btn--tiny btn--increase-servings">
          <svg>
            <use href="${icons}#icon-plus-circle"></use>
          </svg>
        </button>
      </div>
    </div>

    <div class="recipe__user-generated">
      <svg>
        <use href="${icons}#icon-user"></use>
      </svg>
    </div>
    <button class="btn--round">
      <svg class="">
        <use href="${icons}#icon-bookmark-fill"></use>
      </svg>
    </button>
  </div>

  <div class="recipe__ingredients">
    <h2 class="heading--2">Recipe ingredients</h2>
    <ul class="recipe__ingredient-list">

    
    ${recipe.ingredients // looping over the ingredients array to create new ingredients html element
      .map(ing => {
        return `
      <li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${icons}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${ing.quantity}</div>
      <div class="recipe__description">
        <span class="recipe__unit">${ing.unit}</span>
        ${ing.description}
      </div>
    </li>
      `;
      })
      .join('')} 

    </ul>
  </div>

  <div class="recipe__directions">
    <h2 class="heading--2">How to cook it</h2>
    <p class="recipe__directions-text">
      This recipe was carefully designed and tested by
      <span class="recipe__publisher">${
        recipe.publisher
      }</span>. Please check out
      directions at their website.
    </p>
    <a
      class="btn--small recipe__btn"
      href="${recipe.sourceUrl}"
      target="_blank"
    >
      <span>Directions</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </a>
  </div>
    `;
    // Emptying the recipe container
    recipeContainer.innerHTML = '';
    recipeContainer.insertAdjacentHTML('afterbegin', markup);
    */

    // TESTING
    controlServings();

    // error handling
  } catch (err) {
    console.log(err);
    recipeView.renderError(
      `We could not find that recipe. Please try another one!`
    );
  }
};

// controll search result
const controlSearchResults = async function () {
  try {
    resultView.renderSpinner();
    // Get search query
    const query = searchView.getQuery();
    if (!query) return;
    //load search results
    await model.loadSearchResult(query);
    //render results
    // resultView.render(model.state.search.results)
    // calling pagination functionality
    // resultView.render(model.getSearchResultPage(1))
    resultView.render(model.getSearchResultPage(1));

    // Render initial pagination buttons
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function (goToPage) {
  // render new result
  resultView.render(model.getSearchResultPage(goToPage));

  // Render new  pagination buttons
  paginationView.render(model.state.search);
};

const controlServings = function () {
  // Update the recipe servings in the state
  model.updateServings(4);

  // Update the recipe view
  recipeView.render(model.state.recipe);
};

const init = function () {
  recipeView.addHandlerRender(controlRecipe);
  recipeView.addHandlerRender(controlServings);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
};

init();
// controlRecipe();
// ['hashchange', 'load'].forEach(ev =>
//   window.addEventListener(ev, controlRecipe)
// );
// this method above is also the same with using the below  method

// window.addEventListener('hashchange', controlRecipe);
// window.addEventListener('load', controlRecipe);
