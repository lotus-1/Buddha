import React from "react";
import { Link } from "react-router-dom";
import Toolbar from "./navigation/navigation.js";
import BuddhaButton from "./components/BuddhaButtons.js";
import MyHeader from "./header/cpSummaryHeader.js";
import BuddhaInput from "./components/BuddhaInput.js";

class CpDetails extends React.Component {
  onSubmit = e => {
    e.preventDefault();
    if (e.onClick) return this.addContentPackage();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <Toolbar />
        <MyHeader />
        <Link to="/cpDetails">
          <BuddhaButton name="Details" variant="light" />
        </Link>
        <Link to="/cpAllocation">
          <BuddhaButton name="Allocation" variant="info" />
        </Link>
        <Link to="/cpSummary">
          <BuddhaButton name="Summary" variant="blue" />
        </Link>
        <BuddhaButton
          name="Save"
          variant="save"
          onClick={e => this.onSubmit(e)}
        />
        <BuddhaButton name="Cancle" variant="cancel" onClick="" />
        <BuddhaInput
          formVariant="detailsForm"
          labelInputVariant="packageId"
          labelVariant="detailsLabel"
          labelName="Package ID:"
          inputName="packageId"
          inputVariant="detailsInput"
        />
        <BuddhaInput
          formVariant="detailsForm"
          labelInputVariant="programName"
          labelVariant="detailsLabel"
          labelName="Program Name:"
          inputName="programName"
          inputVariant="detailsInput"
        />
        <BuddhaInput
          formVariant="detailsForm"
          labelInputVariant="packageLevel1"
          labelVariant="detailsLabel"
          labelName="Package Level 1:"
          inputName="packageLevel1"
          inputVariant="detailsInput"
        />
        <BuddhaInput
          formVariant="detailsForm"
          labelInputVariant="packageLevel2"
          labelVariant="detailsLabel"
          labelName="Package Level 2:"
          inputName="packageLevel2"
          inputVariant="detailsInput"
        />
        <BuddhaInput
          formVariant="detailsForm"
          labelInputVariant="packageLevel3"
          labelVariant="detailsLabel"
          labelName="Package Level 3:"
          inputName="packageLevel3"
          inputVariant="detailsInput"
        />
        <BuddhaInput
          formVariant="detailsForm"
          labelInputVariant="priority"
          labelVariant="detailsLabel"
          labelName="Priority:"
          inputName="priority"
          inputVariant="detailsInput"
        />
        <BuddhaInput
          formVariant="detailsForm"
          labelInputVariant="relatedWT"
          labelVariant="detailsLabel"
          labelName="Related WT:"
          inputName="relatedWT"
          inputVariant="detailsInput"
        />
        <BuddhaInput
          formVariant="detailsForm"
          labelInputVariant="packageStatus"
          labelVariant="detailsLabel"
          labelName="Packages Status:"
          inputName="packageStatus"
          inputVariant="detailsInput"
        />
        <BuddhaInput
          formVariant="detailsForm"
          labelInputVariant="generic"
          labelVariant="detailsLabel"
          labelName="Generic:"
          inputName="generic"
          inputVariant="detailsInput"
        />
        <BuddhaInput
          formVariant="detailsForm"
          labelInputVariant="year"
          labelVariant="detailsLabel"
          labelName="Year:"
          inputName="year"
          inputVariant="detailsInput"
        />
        <BuddhaInput
          formVariant="detailsForm"
          labelInputVariant="q419Flag"
          labelVariant="detailsLabel"
          labelName="Q4'19 Flag:"
          inputName="q419Flag"
          inputVariant="detailsInput"
        />
        <BuddhaInput
          formVariant="detailsForm"
          labelInputVariant="q"
          labelVariant="detailsLabel"
          labelName="Q:"
          inputName="q"
          inputVariant="detailsInput"
        />
        <BuddhaInput
          formVariant="detailsForm"
          labelInputVariant="motivation"
          labelVariant="detailsLabel"
          labelName="Motivation:"
          inputName="motivation"
          inputVariant="detailsInput"
        />
        <BuddhaInput
          formVariant="detailsForm"
          labelInputVariant="relatedSection"
          labelVariant="detailsLabel"
          labelName="Related Section:"
          inputName="relatedSection"
          inputVariant="detailsInput"
        />
      </div>
    );
  }
}
export default CpDetails;
