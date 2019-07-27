import React from "react";
import Toolbar from "./BuddhaNavigation.js";
import MyInput from "./myContentInput.js";
import MyTable from "./myContentTable.js";
import BuddhaButton from "./BuddhaButtons.js";
import DropDownItem from "./BuddhaDropDown.js";
import "../css/MyContentPackages.css";

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
