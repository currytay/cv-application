import React from "react";
import styles from "../styles/workedu.module.css";
import { Link } from "react-router-dom";

// component to display work experience page
const WorkSection = ({
  values,
  handleChange,
  addWork,
  deleteWork,
  checkWork,
}) => {
  return (
    <div className={styles.editcontainer}>
      <div className={styles.cvcontainer}>
        <div id="work-section" className={styles.editsection}>
          <div className={styles.sectionheadingflex}>
            <h3 className={styles.headingtext}>Work Experience</h3>
            <button className={styles.addbutton} onClick={addWork}>
              Add experience
            </button>
          </div>
          <div className={styles.sectionelements}>
            {values.work.map((input, index) => {
              return (
                <div className={styles.workentry} key={index + 1}>
                  <form autoComplete="off">
                    <input
                      type="text"
                      className={styles.textinputshort}
                      autoComplete="new-password"
                      placeholder="Company*"
                      name="company"
                      id={index}
                      value={input.company}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      className={`${styles.textinputshort} ${styles.inputright}`}
                      autoComplete="new-password"
                      placeholder="Title*"
                      name="title"
                      id={index}
                      value={input.title}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      className={styles.textinputshort}
                      autoComplete="new-password"
                      maxLength="4"
                      placeholder="Start date YYYY*"
                      name="startWork"
                      id={index}
                      value={input.startWork}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      className={`${styles.textinputshort} ${styles.inputright}`}
                      autoComplete="new-password"
                      maxLength="4"
                      placeholder="End date YYYY*"
                      name="endWork"
                      id={index}
                      value={input.endWork}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      className={styles.textinputshort}
                      autoComplete="new-password"
                      placeholder="Location"
                      name="locationWork"
                      id={index}
                      value={input.locationWork}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      className={`${styles.textinputshort} ${styles.inputright}`}
                      autoComplete="new-password"
                      placeholder="URL"
                      name="urlWork"
                      id={index}
                      value={input.urlWork}
                      onChange={handleChange}
                    />
                    <textarea
                      type="text"
                      className={styles.textinputlong}
                      autoComplete="new-password"
                      placeholder="Describe your responsibilities"
                      name="descriptionWork"
                      id={index}
                      value={input.descriptionWork}
                      onChange={handleChange}
                    />
                  </form>
                  <div className={styles.buttonsection}>
                    <button
                      className={styles.deletebutton}
                      onClick={(e) => deleteWork(index)}
                    >
                      Delete ↑
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.navigationelements}>
            <Link to="/personal">
              <button className={styles.navbutton}>Prev section</button>
            </Link>
            <Link to="/education">
              <button className={styles.navbutton} onClick={checkWork}>
                Next section
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;