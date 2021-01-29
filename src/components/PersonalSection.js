import React from "react";
import styles from "../styles/personal.module.css";
import { Link } from "react-router-dom";

// component to display personal information page
const PersonalSection = ({ values, handleChange, checkPersonal }) => {
  return (
    <div className={styles.editcontainer}>
      <div className={styles.cvcontainer}>
        <div id="personal-section" className={styles.editsection}>
          <div className={styles.sectionheading}>
            <h3 className={styles.headingtext}>Personal Information</h3>
          </div>
          <div className={styles.sectionelements}>
            <form autoComplete="off">
              <input
                type="text"
                className={styles.textinputshort}
                autoComplete="new-password"
                placeholder="First name*"
                name="firstName"
                value={values.personal.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                className={`${styles.textinputshort} ${styles.inputright}`}
                autoComplete="new-password"
                placeholder="Last name*"
                name="lastName"
                value={values.personal.lastName}
                onChange={handleChange}
              />
              <input
                type="text"
                className={styles.textinputshort}
                autoComplete="new-password"
                placeholder="Location*"
                name="location"
                value={values.personal.location}
                onChange={handleChange}
              />
              <input
                type="text"
                className={`${styles.textinputshort} ${styles.inputright}`}
                autoComplete="new-password"
                placeholder="Website / LinkedIn"
                name="website"
                value={values.personal.website}
                onChange={handleChange}
              />
              <input
                type="text"
                className={styles.textinputshort}
                autoComplete="new-password"
                placeholder="Email address"
                name="email"
                value={values.personal.email}
                onChange={handleChange}
              />
              <input
                type="text"
                className={`${styles.textinputshort} ${styles.inputright}`}
                autoComplete="new-password"
                placeholder="Phone number"
                name="phone"
                value={values.personal.phone}
                onChange={handleChange}
              />
              <textarea
                type="text"
                className={styles.textinputlong}
                autoComplete="new-password"
                placeholder="Describe yourself...who are you?"
                name="about"
                value={values.personal.about}
                onChange={handleChange}
              />
            </form>
          </div>
          <div className={styles.navigationelements}>
            <Link to="/">
              <button className={styles.homebutton}>Back to Home</button>
            </Link>
            <Link to="/work">
              <button className={styles.navbutton} onClick={checkPersonal}>
                Next section
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalSection;