import React from 'react';
import Recipe from './Recipe';
import './RecipeList.css';

const RecipeList = (props) => {
  // filter recipe according to search box text (case insensitive)
  // TODO: จริงๆแล้วควร filter ตั้งแต่ RecipeListContainer นะครับ ลองศึกษาเรื่อง mapStateToProps จะเจอวิธีที่ดีกว่านี้ครับ
  const filteredRecipes = props.recipes.filter(r => r.title.toLowerCase().indexOf(props.searchTerm.toLowerCase()) > -1);
  const recipes = filteredRecipes.map((r, i) => (
    <Recipe key={r.id} {...r} deleteRecipe={props.deleteRecipe}/>
  ));
  return (
    <div className="recipe-list">
      {recipes}
    </div>
  );
}

export default RecipeList;
