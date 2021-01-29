import React, { Component } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Routes from "./components/Routes";
import ScrollToTop from "./components/ScrollToTop";

// component to control start and updates to info
class App extends Component {
  constructor() {
    super();
    this.state = {
      personal: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        location: "",
        website: "",
        about: "",
      },
      work: [
        {
          company: "",
          title: "",
          startWork: "",
          endWork: "",
          locationWork: "",
          urlWork: "",
          descriptionWork: "",
        },
      ],
      education: [
        {
          school: "",
          degree: "",
          startEdu: "",
          endEdu: "",
          locationEdu: "",
          urlEdu: "",
          descriptionEdu: "",
        },
      ],
      interests: [],
    };
  }

  // function handle changes to all fields
  handleChange = (event) => {
    let fieldName = event.target.name;
    let newValue = event.target.value;
    let id = event.target.id;
    let personalFields =
      "firstName, lastName, email, phone, location, website, about";
    let workFields =
      "company, title, startWork, endWork, locationWork, urlWork, descriptionWork";
    let eduFields =
      "school, degree, startEdu, endEdu, locationEdu, urlEdu, descriptionEdu";

    if (personalFields.includes(fieldName)) {
      let personal = { ...this.state.personal };
      personal[fieldName] = newValue;
      this.setState({ personal });
    } else if (workFields.includes(fieldName)) {
      let work = [...this.state.work];
      work[id][fieldName] = newValue;
      this.setState({ work });
    } else if (eduFields.includes(fieldName)) {
      let education = [...this.state.education];
      education[id][fieldName] = newValue;
      this.setState({ education });
    } else if (fieldName === "text") {
      let interests = [...this.state.interests];
      interests[id][fieldName] = newValue;
      this.setState({ interests });
    }
  };

  // functions to add or delete work experience entries
  addWork = () => {
    const newWork = {
      company: "",
      title: "",
      startWork: "",
      endWork: "",
      locationWork: "",
      urlWork: "",
      descriptionWork: "",
    };
    this.setState({ work: [...this.state.work, newWork] });
  };

  deleteWork = (index) => {
    let work = [...this.state.work];
    work.splice(index, 1);
    this.setState({ work: work });
  };

  // functions to add or delete education entries
  addEducation = () => {
    const newEducation = {
      school: "",
      degree: "",
      startEdu: "",
      endEdu: "",
      locationEdu: "",
      urlEdu: "",
      descriptionEdu: "",
    };
    this.setState({ education: [...this.state.education, newEducation] });
  };

  deleteEducation = (index) => {
    let education = [...this.state.education];
    education.splice(index, 1);
    this.setState({ education: education });
  };

  // functions to add or delete interests 
  addInterest = () => {
    const newInterest = {
      text: "",
    };
    this.setState({ interests: [...this.state.interests, newInterest] });
  };

  deleteInterest = (index) => {
    let interests = [...this.state.interests];
    interests.splice(index, 1);
    this.setState({ interests: interests });
  };

  // functions to check whether required fields have been completed
  // also adds placeholder text if certain fields left blank
  checkPersonal = (e) => {
    let personal = { ...this.state.personal };
    let firstName = "firstName";
    let lastName = "lastName";
    let email = "email";
    let location = "location";
    let phone = "phone";
    let about = "about";

    if (
      personal[firstName] === "" ||
      personal[lastName] === "" ||
      personal[location] === ""
    ) {
      e.preventDefault();
      alert("Please complete the required fields!");
    } else {
      if (personal[about] === "") {
        personal[about] = "Not provided.";
        this.setState({ personal });
      }

      if (personal[email] === "") {
        personal[email] = "Not available";
        this.setState({ personal });
      }

      if (personal[phone] === "") {
        personal[phone] = "Not available";
        this.setState({ personal });
      }
    }
  };

  checkWork = (e) => {
    let work = { ...this.state.work };
    let length = this.state.work.length;
    let company = "company";
    let title = "title";
    let startWork = "startWork";
    let endWork = "endWork";

    for (let i = 0; i < length; i++) {
      if (
        work[i][company] === "" ||
        work[i][title] === "" ||
        work[i][startWork] === "" ||
        work[i][endWork] === ""
      ) {
        e.preventDefault();
        alert("Please complete the required fields!");
      }
    }

    if (length === 0) {
      e.preventDefault();
      alert("Please enter at least one experience.");
    }
  };

  checkEducation = (e) => {
    let education = { ...this.state.education };
    let length = this.state.education.length;
    let school = "school";
    let degree = "degree";
    let startEdu = "startEdu";
    let endEdu = "endEdu";

    for (let i = 0; i < length; i++) {
      if (
        education[i][school] === "" ||
        education[i][degree] === "" ||
        education[i][startEdu] === "" ||
        education[i][endEdu] === ""
      ) {
        e.preventDefault();
        alert("Please complete the required fields!");
      }
    }

    if (length === 0) {
      e.preventDefault();
      alert("Please enter at least one experience.");
    }
  };

  checkInterests = (e) => {
    let interests = { ...this.state.interests };
    let length = this.state.interests.length;
    let text = "text";

    for (let i = 0; i < length; i++) {
      if (interests[i][text] === "") {
        e.preventDefault();
        alert("Please complete the required fields!");
      }
    }

    if (length === 0) {
      e.preventDefault();
      alert("Please enter at least one interest.");
    }
  };

  render() {
    return (
      <BrowserRouter>
        <ScrollToTop />
        <Switch>
          <Routes
            values={this.state}
            handleChange={this.handleChange}
            addInterest={this.addInterest}
            deleteInterest={this.deleteInterest}
            addWork={this.addWork}
            deleteWork={this.deleteWork}
            addEducation={this.addEducation}
            deleteEducation={this.deleteEducation}
            checkPersonal={this.checkPersonal}
            checkWork={this.checkWork}
            checkEducation={this.checkEducation}
            checkInterests={this.checkInterests}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
