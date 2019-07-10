import React from "react";
import Toolbar from "./navigation/navigation.js";
import Header from "./header/header.js";
import DropDownItem from "./dropDown/dropDown.js"
import Buttons from "./buttons/buttons.js";
import Form from "./input/input.js";
import ProgramTable from "./table/table.js";
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
