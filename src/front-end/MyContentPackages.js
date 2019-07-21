import React from "react";
import Toolbar from "./navigation/navigation.js";
import MyInput from "./input/myContentInput.js";
import MyTable from "./table/myContentTable.js";
import BuddhaButton from "./buttons/myContentButtons.js";
import DropDownItem from "./dropDown/dropDown.js";
import "./MyContentPackages.css";

class SecondPage extends React.Component {
  render() {
    return (
      <div>
        <Toolbar />
        <DropDownItem />
        <MyInput />
        <MyTable />
        <BuddhaButton name="WT Allocation Summury" variant="blue" />
        <BuddhaButton name="CP's Summury" variant="light" />
        <button className="boxButton" onClick="">
          <img
            className="boxImage"
            src="assets/box-icon.png"
            alt="Box-Button"
          />
        </button>
      </div>
    );
  }
}
export default SecondPage;
