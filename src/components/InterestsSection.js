import React from "react";
import styles from "../styles/interests.module.css";
import { Link } from "react-router-dom";

// component to display interests page
const InterestsSection = ({
  values,
  handleChange,
  addInterest,
  deleteInterest,
  checkInterests,
}) => {
  return (
    <div className={styles.editcontainer}>
      <div className={styles.cvcontainer}>
        <div id="interests-section" className={styles.editsection}>
          <div className={styles.sectionheadingflex}>
            <h3 className={styles.headingtext}>Interests</h3>
            <button className={styles.addbutton} onClick={addInterest}>
              Add interest
            </button>
          </div>
          <div className={styles.sectionelements}>
            {values.interests.map((input, index) => {
              return (
                <div className={styles.interestentry} key={index + 1}>
                  <form autoComplete="off">
                    <input
                      type="text"
                      className={styles.textinputshort}
                      autoComplete="new-password"
                      placeholder="Ex: Reading"
                      name="text"
                      id={index}
                      value={input.text}
                      onChange={handleChange}
                    />
                  </form>
                  <button
                    className={styles.deletebutton}
                    onClick={(e) => deleteInterest(index)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
          <div className={styles.navigationelements}>
            <Link to="/education">
              <button className={styles.navbutton}>Prev section</button>
            </Link>
            <Link to="/preview">
              <button className={styles.submitbutton} onClick={checkInterests}>
                Preview
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterestsSection;
