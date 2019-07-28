import React from "react";
import { Link } from "react-router-dom";
import "../css/navigation.css";

const navigatorsArray = [
  "All Content Packages",
  "My Content Packages",
  "WT Setting"
];

class Navigation extends React.Component {
  render(){
  return (
    <div>
    <table cellSpacing="20" className="navigationMenu">
      <div>
        <div>
          <img src="assets/hp-logo.png" alt="hp logo" />
        </div>
        <div className="header">
          Buddha
          <br /> System
        </div>
        <tr>
          <th className="navigatorRow">
            <Link to="/">{navigatorsArray[0]}</Link>
          </th>
          <th className="navigatorRow">
            <Link to="/secondPage">{navigatorsArray[1]}</Link>
          </th>
          <th className="navigatorRow">
            <Link to="/">{navigatorsArray[2]}</Link>
          </th>
        </tr>
      </div>
    </table>
    </div>
  );
};
};

export default Navigation;
