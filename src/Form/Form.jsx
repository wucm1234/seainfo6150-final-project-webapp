import React, { useState } from "react";
import styles from "./Form.module.css";

const Form = () => {
  const [submittedForm, setSubmittedForm] = useState();
  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log("DATA", data.get("foo"));
    setSubmittedForm(data);
  }

  return (
    <div>
      {submittedForm ? (
        <ul className={styles.container}>
          <li>
            <div className={styles.label}>First Name: </div>
            <div className={styles.content}>
              {submittedForm.get("firstname")}
            </div>
          </li>
          <li>
            <div className={styles.label}>Last Name: </div>
            <div className={styles.content}>
              {submittedForm.get("lastname")}
            </div>
          </li>
          <li>
            <div className={styles.label}>Email: </div>
            <div className={styles.content}>{submittedForm.get("email")}</div>
          </li>
        </ul>
      ) : (
        <form onSubmit={onSubmit}>
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
            required
          ></input>
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
            required
          ></input>
          <label htmlFor="mname">Middle Name</label>
          <input
            type="text"
            id="mname"
            name="middlename"
            placeholder="Your middle name.."
          ></input>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="The city you lived in"
          ></input>
          <label htmlFor="country">Country</label>
          <select id="country" name="country">
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>
          <label htmlFor="telephone">Telephone:</label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
          ></input>
          <small>eg:0000000000</small>
          <br />
          <br />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required="required" />

          <label>Gender</label>
          <br />

          <input type="radio" name="gender" id="male" value="male" />
          <label htmlFor="male">Male</label>
          <input type="radio" name="gender" id="female" value="female" />
          <label htmlFor="female">Female</label>
          <input type="radio" name="gender" id="unknown" value="unknown" />
          <label htmlFor="unknown">Unknown</label>
          <br />
          <br />
          <label htmlFor="food">Faverate food</label>
          <select id="food" name="food">
            <option value="none">Select...</option>
            <option value="vege">Vegetable</option>
            <option value="meat">Meat</option>
            <option value="cereal">Cereal</option>
          </select>
          <input type="submit" value="Send it" />
        </form>
      )}
    </div>
  );
};

export default Form;
