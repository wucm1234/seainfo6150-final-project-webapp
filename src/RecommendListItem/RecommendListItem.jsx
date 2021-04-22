import styles from "./RecommendListItem.module.css";
import React from "react";
import { Link } from "react-router-dom";
import RecipeImage from "../RecipeImage/RecipeImage.jsx";
const RecommendListItem = ({ recipe }) => {
  return !recipe ? (
    <div>error</div>
  ) : (
    <li className={styles.container} key={recipe.id}>
      <div className={styles.recipeImage}>
        <RecipeImage url={recipe.imageURL} title={recipe.name} />
      </div>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>
          <Link className={styles.link} to={`/recipe/${recipe.id}`}>
            {recipe.name}
          </Link>
        </h2>
        <div className={styles.text}>
          {recipe.steps.map((step) => (
            <div key={step}>{step}</div>
          ))}
        </div>
      </div>
    </li>
  );
};

export default RecommendListItem;
