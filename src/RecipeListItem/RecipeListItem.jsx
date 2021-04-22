import React from "react";
import styles from "./RecipeListItem.module.css";
import { Link } from "react-router-dom";
import RecipeImage from "../RecipeImage/RecipeImage.jsx";

const RecipeListItem = ({ recipe }) => {
  return (
    <li className={styles.container} key={recipe.id}>
      <RecipeImage url={recipe.imageURL} title={recipe.name} />
      <h2 className={styles.title}>
        <Link className={styles.link} to={`/recipe/${recipe.id}`}>
          {recipe.name}
        </Link>
      </h2>
    </li>
  );
};

export default RecipeListItem;
