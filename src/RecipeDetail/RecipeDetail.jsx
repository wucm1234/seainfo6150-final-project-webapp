import React from "react";
import styles from "./RecipeDetail.module.css";
import RecipeImage from "../RecipeImage/RecipeImage";

const RecipeDetail = ({ recipe }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>{recipe.name}</h1>
        <div className={styles.recipeImage}>
          <RecipeImage url={recipe.imageURL} title={recipe.name} />
        </div>
      </header>
      <div className={styles.ingredients}>
        <h2>Ingredients</h2>
        {recipe.ingredients.map((ingredient) => (
          <div key={ingredient["name"]}>
            {ingredient["name"]}, {ingredient["quantity"]}
          </div>
        ))}
      </div>
      <div className={styles.steps}>
        <h2>Steps</h2>
        {recipe.steps.map((step) => (
          <div key={step}>- {step}</div>
        ))}
      </div>
    </div>
  );
};

export default RecipeDetail;
