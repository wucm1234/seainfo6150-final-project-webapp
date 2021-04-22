import styles from "./RecommendList.module.css";
import React from "react";
import RecommendListItem from "../RecommendListItem/RecommendListItem";
const RecommendList = ({ recipes }) => {
  let displayContent;
  if (recipes) {
    displayContent = (
      <ul className={styles.container}>
        {recipes.map((recipe) => (
          <RecommendListItem key={recipe.id} recipe={recipe} />
        ))}
      </ul>
    );
  } else {
    displayContent = <div>You have no data!</div>;
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.recommendTitle}>Today's Recommend Recipes</h1>
      {displayContent}
    </div>
  );
};

export default RecommendList;
