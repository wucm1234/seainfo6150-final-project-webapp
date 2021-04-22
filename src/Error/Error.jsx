import React from "react";
import styles from "./Error.module.css";

const Error = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.errorImg}
        src="https://wpklik.com/wp-content/uploads/2019/03/A-404-Page-Best-Practices-and-Design-Inspiration.jpg"
        alt="404 error"
      ></img>
      <p className={styles.lostText}>You seem lost.</p>
      <p>The page you are trying to reach doesn't exist.</p>
    </div>
  );
};

export default Error;
