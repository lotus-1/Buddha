import React from "react";
import Toolbar from "./navigation/navigation.js";
import BuddhaButton from "./components/BuddhaButtons.js";
import BuddhaButtonWithLink from "./components/BuddhaButtonWithLink.js";
import BuddhaHeader from "./components/BuddhaHeader.js";
import BuddhaInput from "./components/BuddhaInput.js";

class ContentPackageDetails extends React.Component {
  onSubmit = e => {
    console.log("Button Clicked !");
    e.preventDefault();
    if (e.onClick) return this.addContentPackage();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <Toolbar />
        <BuddhaHeader header='Content Package - "CP Name"' />
        <BuddhaButtonWithLink
          name="Details"
          variant="light"
          link="/ContentPackageDetails"
        />
        <BuddhaButtonWithLink
          name="Allocation"
          variant="info"
          link="/cpAllocation"
        />
        <BuddhaButtonWithLink name="Summary" variant="blue" link="/cpSummary" />
        <BuddhaButton name="Save" variant="save" onClick={this.onSubmit} />
        <BuddhaButton name="Cancle" variant="cancel" onClick={this.onSubmit} />
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
export default ContentPackageDetails;
