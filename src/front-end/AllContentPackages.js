import React from "react";
import Toolbar from "./navigation/navigation.js";
import Header from "./header/header.js";
import DropDownItem from "./dropDown/dropDown.js";
import Buttons from "./buttons/allContentButtons.js";
import Form from "./input/allContentInput.js";
import ProgramTable from "./table/allContentTable.js";
import "./AllContentPackages.css";

class Home extends React.Component {
  render() {
    return (
      <div className="app">
        <Toolbar />
        <Header />
        <DropDownItem />
        <Form />
        <ProgramTable />
        <Buttons />
      </div>
    );
  }
}

export default Home;
