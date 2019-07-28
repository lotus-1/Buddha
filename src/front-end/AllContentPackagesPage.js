import React from "react";
import Navigation from "./components/BuddhaNavigation.js";
import Header from "./components/BuddhaHeader.js";
import DropDownItem from "./components/BuddhaDropDown.js";
import BuddhaButtons from "./components/BuddhaButtons.js";
import BuddhaImage from "./components/BuddhaImage.js";
import BuddhaTable from "./components/BuddhaTable.js";
import BuddhaForm from "./components/BuddhaForm.js";
import "./css/AllContentPackagesPage.css";

class AllContentPackagesPage extends React.Component {
  render() {
    return (
      <div className="app">
        <Navigation />
        <Header />
        <DropDownItem />
        <BuddhaForm
          formVariant="allContentPackageForm"
          labelInputVariant="input1"
          labelName="Program:"
          inputName="Program"
        />
        <BuddhaForm
          formVariant="allContentPackageForm"
          labelInputVariant="input2"
          labelName="Priority:"
          inputName="Priority"
        />
        <BuddhaForm
          formVariant="allContentPackageForm"
          labelInputVariant="input3"
          labelName="Package Level 1:"
          inputName="Package Level 1"
        />
        <BuddhaForm
          formVariant="allContentPackageForm"
          labelInputVariant="input4"
          labelName="Package Level 2:"
          inputName="Package Level 2"
        />
        <BuddhaForm
          formVariant="allContentPackageForm"
          labelInputVariant="input5"
          labelName="Related WT:"
          inputName="Related WT"
        />
        <BuddhaForm
          formVariant="allContentPackageForm"
          labelInputVariant="input6"
          labelName="Q`419 Baseline Flag:"
          inputName="Q419BaselineFlag"
        />
        <BuddhaTable />
        <BuddhaButtons name="ADD CP" variant="addButton" />
        <BuddhaButtons name="Remove CP" variant="removeButton" />
        <BuddhaButtons name="Split CP" variant="split" />
        <BuddhaButtons name="Create Filter" variant="createFilter" />
        <BuddhaButtons name="Edit Filter" variant="editFilter" />
        <BuddhaButtons variant="boxButtonSide" />
        <BuddhaImage />
      </div>
    );
  }
}

export default AllContentPackagesPage;