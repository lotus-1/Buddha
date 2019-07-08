import React from "react";
import Toolbar from "./navigation/navigation.js";
import "./AllContentPackages.css";

class Home extends React.Component {
  render() {
    return (
      <div className="app">
        <Toolbar />
      </div>
    );
  }
}

export default Home;
