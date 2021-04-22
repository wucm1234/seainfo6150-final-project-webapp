import React from "react";
import styles from "./Home.module.css";
import RecommendList from "../RecommendList/RecommendList";

const Home = ({ recommendRecipes }) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.webTitle}>
          <div className={styles.titleWords}>Recipe Website</div>
        </div>
        <picture>
          <source
            className={styles.titleImage}
            media="(max-width: 600px)"
            srcSet="https://www.helpguide.org/wp-content/uploads/table-with-grains-vegetables-fruit-768.jpg 600w"
            sizes="(max-width: 600px) 600px"
          />
          <source
            className={styles.titleImage}
            media="(max-width: 1000px)"
            srcSet="https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg 1000w"
            sizes="(max-width: 1000px) 1000px"
          />
          <source
            className={styles.titleImage}
            media="(max-width: 1500px)"
            srcSet="https://media.daveandbusters.com/media/5343/web-cover-photo-eat.jpg 1500w"
            sizes="(max-width: 1500px) 1500px"
          />
          <img
            className={styles.titleImage}
            src="https://media.daveandbusters.com/media/5343/web-cover-photo-eat.jpg"
            alt="food"
          />
        </picture>
      </header>
      <RecommendList recipes={recommendRecipes} />
    </>
  );
};

export default Home;
