import React from "react";
import styles from "./RecipeList.module.css";
import RecipeListItem from "../RecipeListItem/RecipeListItem.jsx";

const RecipeList = ({ recipes }) => {
  let displayContent;

  if (recipes.length) {
    displayContent = (
      <ul className={styles.container}>
        {recipes.map((recipe) => (
          <RecipeListItem key={recipe.id} recipe={recipe} />
        ))}
      </ul>
    );
  } else {
    displayContent = <div>You have no data!</div>;
  }
  return <div>{displayContent}</div>;
};

export default RecipeList;
