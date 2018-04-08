export const ADD_RECIPE = 'ADD_RECIPE';
export const DELETE_RECIPE = 'DELETE_RECIPE';

let id = 4;
export const addRecipe = (recipe) => {
  return { type: ADD_RECIPE, id: id++, recipe };
}

export const deleteRecipe = (id) => {
  return { type: DELETE_RECIPE, id };
}
