import React from "react";

function Recipe({ title, calories, image, ingredient }) {
  return (
    <div className="recipe_list">
      <h2 className="title">{title}</h2>
      <p className="text-calories">Calories: {Math.round(calories)}</p>
      <img src={image} alt={image} className="images" />
      <ul>
        {ingredient.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export default Recipe;
