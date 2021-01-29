import React from "react";
import styles from "../styles/workedu.module.css";
import { Link } from "react-router-dom";

// component to display education page
const EducationSection = ({
  values,
  handleChange,
  addEducation,
  deleteEducation,
  checkEducation,
}) => {
  return (
    <div className={styles.editcontainer}>
      <div className={styles.cvcontainer}>
        <div id="education-section" className={styles.editsection}>
          <div className={styles.sectionheadingflex}>
            <h3 className={styles.headingtext}>Education</h3>
            <button className={styles.addbutton} onClick={addEducation}>
              Add experience
            </button>
          </div>
          <div className={styles.sectionelements}>
            {values.education.map((input, index) => {
              return (
                <div className={styles.eduentry} key={index + 1}>
                  <form autoComplete="off">
                    <input
                      type="text"
                      className={styles.textinputshort}
                      autoComplete="new-password"
                      placeholder="School / institution*"
                      name="school"
                      id={index}
                      value={input.school}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      className={`${styles.textinputshort} ${styles.inputright}`}
                      autoComplete="new-password"
                      placeholder="Degree / certification*"
                      name="degree"
                      id={index}
                      value={input.degree}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      className={styles.textinputshort}
                      autoComplete="new-password"
                      maxLength="4"
                      placeholder="Start date YYYY*"
                      name="startEdu"
                      id={index}
                      value={input.startEdu}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      className={`${styles.textinputshort} ${styles.inputright}`}
                      autoComplete="new-password"
                      maxLength="4"
                      placeholder="End date YYYY*"
                      name="endEdu"
                      id={index}
                      value={input.endEdu}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      className={styles.textinputshort}
                      autoComplete="new-password"
                      placeholder="Location"
                      name="locationEdu"
                      id={index}
                      value={input.locationEdu}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      className={`${styles.textinputshort} ${styles.inputright}`}
                      autoComplete="new-password"
                      placeholder="URL"
                      name="urlEdu"
                      id={index}
                      value={input.urlEdu}
                      onChange={handleChange}
                    />
                    <textarea
                      type="text"
                      className={styles.textinputlong}
                      autoComplete="new-password"
                      placeholder="Describe your coursework, activities, etc."
                      name="descriptionEdu"
                      id={index}
                      value={input.descriptionEdu}
                      onChange={handleChange}
                    />
                  </form>
                  <div className={styles.buttonsection}>
                    <button
                      className={styles.deletebutton}
                      onClick={(e) => deleteEducation(index)}
                    >
                      Delete ↑
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.navigationelements}>
            <Link to="/work">
              <button className={styles.navbutton}>Prev section</button>
            </Link>
            <Link to="/interests">
              <button className={styles.navbutton} onClick={checkEducation}>
                Next section
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
