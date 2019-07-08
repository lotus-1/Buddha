import React from "react";
import Toolbar from "./navigation/navigation.js";
import Header from "./header/header.js";
import DropDownItem from "./dropDown/dropDown.js"
import "./AllContentPackages.css";

class Home extends React.Component {
  render() {
    return (
      <div className="app">
        <Toolbar />
        <Header />
        <DropDownItem />
      </div>
    );
  }
}

export default Home;
