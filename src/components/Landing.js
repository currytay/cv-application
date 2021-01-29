import React from "react";
import styles from "../styles/landing.module.css";
import logo from "../assets/logo-3.png";
import { Link } from "react-router-dom";

// component to display landing page
const Landing = () => {
  return (
    <div className={styles.homecontainer}>
      <img src={logo} alt="cv logo" className={styles.homelogo}></img>
      <h1 className={styles.titletext}>Create a new CV in minutes</h1>
      <h2 className={styles.subtitletext}>
        No distractions, just your information
      </h2>
      <Link to="/personal">
        <button className={styles.createbutton}>
          <span className={styles.buttontext}>Create Your CV</span>
        </button>
      </Link>
      <p className={styles.disclaimertext}>
        Note: this project was built for educational purposes. Your personal
        information will not be stored.{" "}
      </p>
    </div>
  );
};

export default Landing;