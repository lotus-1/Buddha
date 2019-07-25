import React from "react";
import { Link } from "react-router-dom";

import Toolbar from "./navigation/navigation.js";
import CpDetailsButton from "./buttons/cpDetailsButtons.js";
import CpSummaryButton from "./buttons/cpSummaryButtons.js";
import MyHeader from "./header/cpSummaryHeader.js";
// import MySwitch from "./switch/switch.js";
import DetailsInput from "./input/cpDetailsInput.js";
import "./CpDetails.css";

class CpDetails extends React.Component {
  render() {
    return (
      <div>
        <Toolbar />
        <MyHeader />
        <Link to="/cpDetails">
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
        <Link to="/cpSummary">
          <CpSummaryButton
            className="summaryButton"
            name="Summary"
            variant="blue"
          />
        </Link>
        <DetailsInput />
        <CpDetailsButton />
      </div>
    );
  }
}
export default CpDetails;
