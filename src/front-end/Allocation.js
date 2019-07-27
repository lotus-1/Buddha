import React from "react";
import { Link } from "react-router-dom";
import Toolbar from "./navigation/navigation.js";
import DropDownItem from "./dropDown/dropDown.js";
import BoddhaTable1 from "./BuddhaTable1.js";
import BoddhaTable2 from "./BoddhaTable2.js";

import Header from "./header/header.js";
import BuddhaButton from "./BuddhaButtons.js";


class AllocationPage extends React.Component {
  render() {
    return (
      <div>
        <Toolbar />
        <DropDownItem />
        <Header />
        <Link to="/cpDetails">
                  <BuddhaButton name="Details" variant="light" />
                </Link>
                <Link to="/cpAllocation">
                  <BuddhaButton name="Allocation" variant="info" />
                </Link>
                <Link to="/cpSummary">
                  <BuddhaButton name="Summary" variant="blue" />
                </Link>
        <BuddhaButton name="ADD" variant="add"/>
        <BuddhaButton name="remove" variant="remove"/>
        <BuddhaButton name="ADD" variant="add2"/>
        <BuddhaButton name="remove" variant="remove2"/>


        <BoddhaTable1 />
        <BoddhaTable2 />

      </div>
    );
  }
}

export default AllocationPage;
