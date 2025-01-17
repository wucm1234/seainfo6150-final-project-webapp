import React from "react";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={styles.content}>
      <header className={styles.header}>
        <h1>About us</h1>
      </header>
      <div>
        <p>
          Your About Us page is one of the most important pages on your website.
          It’s also likely to be one of the most frequently visited.
        </p>
        <p>
          So you’d better make it good. Keep the following suggestions in mind:
          Much of today’s business is transacted over the web or over the phone
          without an in-person meeting. For that reason, your About Us page must
          do more than communicate what’s special about your company’s products
          or services; it also must inspire trust because without trust, you’ll
          never get the prospect to reach for his wallet. One of the easiest
          ways to begin building trust? Tell them where’ you’re located.{" "}
        </p>
        <p>
          To visitors, you’re probably just a website address. That’s pretty
          impersonal. Even if you have your mailing address on your Contact
          page, it’s still a good idea to mention at least your city and state
          on your About Us page. Then visitors have a sense of how close, or
          far, you are to them. That’s information they can relate to. So simple
          and yet so many businesses neglect to do so.{" "}
        </p>
        <p>
          Every nugget of information you openly share helps inspire a little
          more trust.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
