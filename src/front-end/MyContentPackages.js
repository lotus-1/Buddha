import React from "react";
import { Link } from "react-router-dom";
import Toolbar from "./navigation/navigation.js";
import MyInput from "./input/myContentInput.js";
import MyTable from "./table/myContentTable.js";
import BuddhaButton from "./BuddhaButtons.js";
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
        <BuddhaButton name="WT Allocation Summary" variant="blue" />
        <Link to="/cpSummary">
        <BuddhaButton name="CP's Summary" variant="light"/>
        </Link>
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
