import React from "react";
import Sidebar from "react-sidebar";
import "./navigation.css";

const navigatorsArray = [
  "All Content Packages",
  "My Content Packages",
  "WT Setting"
];

const toolbar = props => {
  return (
    <Sidebar>
      <table cellSpacing="20" className="navigationMenu">
        <tbody>
          <img src="assets/hp-logo.png" alt="hp logo" />
          <div className="header">
            Buddha
            <br /> System
          </div>
          <tr>
          <th className="navigatorRow">
            <a href="/">{navigatorsArray[0]}</a>
          </th>
          <th className="navigatorRow">
            <a href="/">{navigatorsArray[1]}</a>
          </th>
          <th className="navigatorRow">
            <a href="/">{navigatorsArray[2]}</a>
          </th>
          </tr>
        </tbody>
      </table>
    </Sidebar>
  );
};

export default toolbar;

// {navigatorsArray.map(el => (
//   <th className="navigatorRow">
//     <a href="/">{el}</a>
//   </th>
// ))}
