import React from "react";
import { Route } from "react-router-dom";
import Landing from "./Landing";
import PersonalSection from "./PersonalSection";
import WorkSection from "./WorkSection";
import EducationSection from "./EducationSection";
import InterestsSection from "./InterestsSection";
import Preview from "./Preview";

// component to handle routing between pages
const Routes = ({
  values,
  handleChange,
  addInterest,
  deleteInterest,
  addWork,
  deleteWork,
  addEducation,
  deleteEducation,
  checkPersonal,
  checkWork,
  checkEducation,
  checkInterests,
}) => {
  return (
    <>
      {/* Landing page */}
      <Route exact path="/" component={Landing} />
      {/* Personal Information page */}
      <Route
        exact
        path="/personal"
        render={(props) => (
          <PersonalSection
            {...props}
            values={values}
            handleChange={handleChange}
            checkPersonal={checkPersonal}
          />
        )}
      />
      {/* Work Experience page */}
      <Route
        exact
        path="/work"
        render={(props) => (
          <WorkSection
            {...props}
            values={values}
            handleChange={handleChange}
            addWork={addWork}
            deleteWork={deleteWork}
            checkWork={checkWork}
          />
        )}
      />
      {/* Education page */}
      <Route
        exact
        path="/education"
        render={(props) => (
          <EducationSection
            {...props}
            values={values}
            handleChange={handleChange}
            addEducation={addEducation}
            deleteEducation={deleteEducation}
            checkEducation={checkEducation}
          />
        )}
      />
      {/* Interests page */}
      <Route
        exact
        path="/interests"
        render={(props) => (
          <InterestsSection
            {...props}
            values={values}
            handleChange={handleChange}
            addInterest={addInterest}
            deleteInterest={deleteInterest}
            checkInterests={checkInterests}
          />
        )}
      />
      {/* Preview page */}
      <Route
        exact
        path="/preview"
        render={(props) => (
          <Preview {...props} values={values} handleChange={handleChange} />
        )}
      />
    </>
  );
};

export default Routes;
