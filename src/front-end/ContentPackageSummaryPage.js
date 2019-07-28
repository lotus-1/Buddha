import React from "react";
import Toolbar from "./components/BuddhaNavigation.js";
import MyHeader from "./header/cpSummaryHeader.js";
import CpSummaryTable from "./table/cpSummaryTable.js";
import BuddhaButtonWithLink from "./components/BuddhaButtonWithLink.js";
import DropDownItem from "./components/BuddhaDropDown.js";

class ContentPackageSummaryPage extends React.Component {
  render() {
    return (
      <div>
        <Toolbar />
        <DropDownItem />
        <MyHeader />
        <CpSummaryTable />
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
      </div>
    );
  }
}
export default ContentPackageSummaryPage;
