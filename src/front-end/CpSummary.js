import React from "react";

import Toolbar from "./navigation/navigation.js";
import ContentPackagesSummaryHeader from "./header/cpSummaryHeader.js";
import ContentPackagesSummaryTable from "./table/cpSummaryTable.js";
import ContentPackagesSummaryButton from "./buttons/cpSummaryButtons.js";
import DropDownItem from "./dropDown/dropDown.js";

import "./CpSummary.css";

class CpSummary extends React.Component {
  render() {
    return (
      <div>
        <Toolbar />
        <DropDownItem />
        <ContentPackagesSummaryHeader />
        <ContentPackagesSummaryTable />
        <ContentPackagesSummaryButton
          className="detailsButton"
          name="Details"
          variant="light"
          to="/TODO"
        />
        <ContentPackagesSummaryButton
          className="allocationButton"
          name="Allocation"
          variant="info"
          to="/"
        />
        <ContentPackagesSummaryButton
          className="summaryButton"
          name="Summary"
          variant="blue"
        />
      </div>
    );
  }
}
export default CpSummary;
