import React from 'react';
import './Recipe.css';

const Recipe = (props) => {
  const { id, title, img, instructions, deleteRecipe } = props;
  const ingredients = props.ingredients.map((ing, i) => (
    <li key={i}>{ing}</li>
  ));
  return (
    <div className="recipe-card">
      <div className="recipe-card-img">
        <img src={img} alt={title} />
      </div>
      <div className="recipe-card-content">
        <h3 className="recipe-title">{title}</h3>
        <h4>Ingredients:</h4>
        <ul>
          {ingredients}
        </ul>
        <h4>Instructions:</h4>
        <p>{instructions}</p>
        <button
          type="button"
          className="btn"
          style={{ float: 'right' }}
          onClick={() => deleteRecipe(id)}
        >
          Delete
        </button>
        <div style={{ clear: 'right' }}/>
      </div>
    </div>
  );
}

export default Recipe;
