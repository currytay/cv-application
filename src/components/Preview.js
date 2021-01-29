import React from "react";
import styles from "../styles/preview.module.css";
import { Link } from "react-router-dom";

// component to display preview page (generated cv)
const Preview = ({ values }) => {
  return (
    <div className={styles.previewcontainer}>
      <div className={styles.cvcontainer}>
        {/* Name section */}
        <div className={styles.previewsection}>
          <div className={styles.namesection}>
            <h1 className={styles.nametext}>
              {values.personal.firstName} {values.personal.lastName}
            </h1>
            <Link to="/personal">
              <button className={styles.editbutton}>Edit</button>
            </Link>
          </div>
          <div className={styles.personaldetailssection}>
            <p className={styles.descriptiontext}>{values.personal.location}</p>
            <p className={styles.descriptiontext}>{values.personal.website}</p>
          </div>
        </div>
        {/* About section */}
        <div className={styles.previewsection}>
          <div className={styles.sectionheading}>
            <h2 className={styles.headingtext}>About</h2>
          </div>
          <div className={styles.sectioncontents}>
            <p className={styles.descriptiontext}>{values.personal.about}</p>
          </div>
        </div>
        {/* Work Experience section */}
        <div className={`${styles.previewsection} ${styles.workedusection}`}>
          <div className={styles.sectionheading}>
            <h2 className={styles.headingtext}>Work Experience</h2>
          </div>
          <div className={styles.entrysectioncontents}>
            {values.work.map((input, index) => {
              return (
                <div className={styles.entrysectioncontents} key={index}>
                  <div
                    className={`${styles.entrycontainer} ${styles.workeducontainer}`}
                  >
                    <div className={styles.entryid}>
                      <p className={styles.descriptiontext}>
                        {input.startWork} ‒ {input.endWork}
                      </p>
                    </div>
                    <div className={styles.entrydetails}>
                      <p className={styles.entrytitletext}>
                        {input.title} at {input.company}
                      </p>
                      <p className={styles.descriptiontext}>
                        {input.locationWork}
                      </p>
                      <p className={styles.descriptiontext}>
                        {input.descriptionWork}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Education section */}
        <div className={`${styles.previewsection} ${styles.workedusection}`}>
          <div className={styles.sectionheading}>
            <h2 className={styles.headingtext}>Education</h2>
          </div>
          <div className={styles.sectioncontents}>
            {values.education.map((input, index) => {
              return (
                <div className={styles.entrysectioncontents} key={index}>
                  <div
                    className={`${styles.entrycontainer} ${styles.workeducontainer}`}
                  >
                    <div className={styles.entryid}>
                      <p className={styles.descriptiontext}>
                        {input.startEdu} ‒ {input.endEdu}
                      </p>
                    </div>
                    <div className={styles.entrydetails}>
                      <p className={styles.entrytitletext}>
                        {input.degree} at {input.school}
                      </p>
                      <p className={styles.descriptiontext}>
                        {input.locationEdu}
                      </p>
                      <p className={styles.descriptiontext}>
                        {input.descriptionEdu}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Interests section */}
        <div className={styles.interestssection}>
          <div className={styles.sectionheading}>
            <h2 className={styles.headingtext}>Interests</h2>
          </div>
          <div className={styles.sectioncontents}>
            {values.interests.map((input, index) => {
              return (
                <div className={styles.entrysectioncontents} key={index}>
                  <div
                    className={`${styles.entrycontainer} ${styles.interestcontainer}`}
                  >
                    <div className={styles.entryid}>
                      <p className={styles.descriptiontext}>{index + 1}</p>
                    </div>
                    <div className={styles.entrydetails}>
                      <p className={styles.entrytitletext}>{input.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Contact section */}
        <div className={styles.previewsection}>
          <div className={styles.sectionheading}>
            <h2 className={styles.headingtext}>Contact</h2>
          </div>
          <div className={styles.sectioncontents}>
            <div className={styles.entrysectioncontents}>
              <div
                className={`${styles.entrycontainer} ${styles.interestcontainer}`}
              >
                <div className={styles.entryid}>
                  <p className={styles.descriptiontext}>Email</p>
                </div>
                <div className={styles.entrydetails}>
                  <p className={styles.entrytitletext}>
                    {values.personal.email}
                  </p>
                </div>
              </div>
              <div
                className={`${styles.entrycontainer} ${styles.interestcontainer}`}
              >
                <div className={styles.entryid}>
                  <p className={styles.descriptiontext}>Phone</p>
                </div>
                <div className={styles.entrydetails}>
                  <p className={styles.entrytitletext}>
                    {values.personal.phone}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
