import React from "react";
import { Link } from "react-router-dom";
import Toolbar from "./BuddhaNavigation.js";
import MyInput from "./myContentInput.js";
import MyTable from "./myContentTable.js";
import BuddhaButtons from "./BuddhaButtons.js";
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
        <BuddhaButtons name="WT Allocation Summary" variant="blue" />
        <Link to="/cpSummary">
          <BuddhaButtons name="CP's Summary" variant="light" />
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
