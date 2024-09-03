import { API_URL } from './config.js';
import { getJSON } from './helpers.js';
import recipeView from './views/recipeView.js';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
  },
};

export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}/${id}`);

    const res = await fetch(`${API_URL}/${id}`);

    // Reformatting the data property names
    // let recipe = data.data.recipe
    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };

    console.log(state.recipe);
  } catch (err) {
    console.error(err);
    throw err;
  }
};

// search funnctionality
export const loadSearchResult = async function (query) {
  try {
    state.search.query = query;
    const data = await getJSON(
      `https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}`
    );
    console.log(data);
    console.log(state.search.results);c

    // reformatting the data property names
    state.search.results = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
      };
    });
    console.log(state.search.results);
  } catch (err) {
    console.log(err);
    throw err;
  }
};
