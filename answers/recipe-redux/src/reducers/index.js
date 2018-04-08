import { ADD_RECIPE, DELETE_RECIPE } from '../actions/recipe';

const initState = {
  recipes: [
    {
      id: 1,
      title: "Spaghetti",
      instructions: "Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce",
      ingredients: ["pasta", "8 cups water", "1 box spaghetti"],
      img: "spaghetti.jpg"
    },
    {
      id: 2,
      title: "Milkshake",
      instructions: "Combine ice cream and milk.  Blend until creamy",
      ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
      img: "milkshake.jpg"
    },
    {
      id: 3,
      title: "Avocado Toast",
      instructions: "Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.",
      ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
      img: "avocado_toast.jpg"
    }
  ]
};

export default function rootReducer(state = initState, action) {
  switch (action.type) {
    case ADD_RECIPE:
      return {
        ...state,
        recipes: [
          ...state.recipes,
          {
            id: action.id,
            title: action.recipe.title,
            instructions: action.recipe.instructions,
            ingredients: action.recipe.ingredients,
            img: action.recipe.img
          }
        ]
      };
    case DELETE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.filter(r => r.id !== action.id)
      };
    default:
      return state;
  }
}
