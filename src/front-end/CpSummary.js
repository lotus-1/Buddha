import React from "react";
import { Link } from "react-router-dom";
import Toolbar from "./navigation/navigation.js";
import MyHeader from "./header/cpSummaryHeader.js";
import CpSummaryTable from "./table/cpSummaryTable.js";
import CpSummaryButton from "./buttons/cpSummaryButtons.js";
import MySwitch from "./switch/switch.js";
import DropDownItem from "./dropDown/dropDown.js";
import "./CpSummary.css";

class CpSummary extends React.Component {
  render() {
    return (
      <div>
        <Toolbar />
        <DropDownItem />
        <MyHeader />
        <CpSummaryTable />
        <MySwitch />
        <Link to="/CpDetails">
          <CpSummaryButton
            className="detailsButton"
            name="Details"
            variant="light"
          />
        </Link>
        <Link to="/">
          <CpSummaryButton
            className="allocationButton"
            name="Allocation"
            variant="light"
          />
        </Link>
        <Link to="/">
          <CpSummaryButton
            className="summaryButton"
            name="Summary"
            variant="blue"
          />
        </Link>
      </div>
    );
  }
}
export default CpSummary;
