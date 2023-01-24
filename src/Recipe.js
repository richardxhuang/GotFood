import React from "react";
import style from "./recipe.module.css";

const Recipe = ({title, calories, image, ingredients, fat, protein, carb}) => {
    let x = Math.round(calories);
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                <h1>Ingredients:</h1>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <ol>
                <h1>Nutrients:</h1>
                    <li>Fat: {Math.round(fat)} grams</li>
                    <li>Protein: {Math.round(protein)} grams</li>
                    <li>Carbs: {Math.round(carb)} grams</li>
            </ol>
            <p>Calories: <br></br> {x}</p>
            <img src={image} alt="" />
        </div>
    );
}

export default Recipe;