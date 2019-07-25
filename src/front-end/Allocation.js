import React from "react";
import Toolbar from "./navigation/navigation.js";
import DropDownItem from "./dropDown/dropDown.js";
import AllocationTabel1 from "./table/allocationTable1.js";
import AllocationTabel2 from "./table/allocationTable2.js";
import Header from "./header/header.js";
import AllocationButtons from "./buttons/allocationButtons.js";


class AllocationPage extends React.Component {
  render() {
    return (
      <div>
        <Toolbar />
        <DropDownItem />
        <Header />
        <AllocationTabel1 />
        <AllocationTabel2 />
        <AllocationButtons />

      </div>
    );
  }
}

export default AllocationPage;
