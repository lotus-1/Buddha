import React from "react";
import Toolbar from "./navigation/navigation.js";
import Header from "./header/header.js";
import DropDownItem from "./dropDown/dropDown.js";
import BuddhaButton from "./components/BuddhaButtons";
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
        <BuddhaButton />
      </div>
    );
  }
}

export default Home;
