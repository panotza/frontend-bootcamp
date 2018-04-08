import React from 'react';
import Recipe from './Recipe';
import './RecipeList.css';

const RecipeList = (props) => {
  const recipes = props.recipes.map((r, i) => (
    <Recipe key={r.id} {...r} onDelete={props.onDelete}/>
  ));
  return (
    <div className="recipe-list">
      {recipes}
    </div>
  );
}

export default RecipeList;
