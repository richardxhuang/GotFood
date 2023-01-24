import React, { useEffect, useState } from 'react';
import Recipe from "./Recipe";
import "./App.css";

const App = () => {
  const ID = "10cea6eb";
  const KEY = "33e1b9c1460f06c422236820f76d0949";

  const [recipies, setRecipies] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chiken');

  useEffect( () =>{
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${ID}&app_key=${KEY}`);
    const data = await response.json();
    setRecipies(data.hits);
    console.log(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  function showRecipes() {
    var x = document.getElementById("recipe-container");
    x.style.display = "block";
  }

  return(
    <main>
      <h2>Got Food?</h2>
      <form onSubmit={getSearch} className="search-form">
        <input type="text" className="search-bar" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit" onClick={showRecipes}>
          GET RECIPES
        </button>
      </form>

      <div className="recipes-container" id='recipe-container'>
        {recipies.map(recipe => (
          <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          fat={recipe.recipe.totalNutrients.FAT.quantity}
          protein={recipe.recipe.totalNutrients.PROCNT.quantity}
          carb={recipe.recipe.totalNutrients.CHOCDF.quantity}
          />
      ))}
      </div>
      
    </main>
  );
}

export default App;