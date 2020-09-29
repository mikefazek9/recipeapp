import React, { useState, useEffect } from "react";
import SubmitBtn from "./SubmitBtn";
import Recipe from "./Recipe";

function Search() {
  // important! key and ID for api @ edamem
  //EDIT FROM GITHUB. TOOK OUT API AND ID KEYS FOR SECURITY
  const apiKey = "";
  const apiId = "";
  // useState
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [btnSubmit, setSubmit] = useState("pizza");
  //   useEffect
  useEffect(() => {
    getRecipe();
  }, [btnSubmit]);

  //   api fetch
  const getRecipe = async () => {
    const res = await fetch(
      `https://api.edamam.com/search?q=${btnSubmit}&app_id=${apiId}&app_key=${apiKey}`
    );
    const data = await res.json();
    setRecipes(data.hits);
    // console.log(data.hits);
  };

  // onChange state
  const changeSearch = (e) => {
    setSearch(e.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    setSubmit(search);
    setSearch(""); // set search back to empty
  };
  //   Render app
  return (
    <div>
      <form onSubmit={submit} className="form">
        <input
          className="input"
          type="search"
          placeholder="ex. chicken, beef, etc.."
          value={search}
          onChange={changeSearch}
        />
        <SubmitBtn />
      </form>
      <div className="recipe_section">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredient={recipe.recipe.ingredientLines}
          />
        ))}
      </div>
    </div>
  );
}

export default Search;
