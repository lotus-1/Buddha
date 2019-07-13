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
      <table cellspacing="20" className="navigationMenu">
        <div>
          <div>
            <img src="assets/hp-logo.png" alt="hp logo" />
          </div>
          <div className="header">
            Buddha
            <br /> System
          </div>
        </div>
        <tr>
        <th className="navigatorRow">

                   <a href="/">{navigatorsArray[0]}</a>
                 </th>
                 <th className="navigatorRow">
                   <a href="/secondPage">{navigatorsArray[1]}</a>
                 </th>
                 <th className="navigatorRow">
                   <a href="/">{navigatorsArray[2]}</a>
                 </th>
        </tr>
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

// import Home from "../AllContentPackages";
// import SecondPage from "../MyContentPackages";
// import { Link } from 'react-router-dom';
// import { Route, Switch } from 'react-router';
//   <Switch>
// <Route path='/' component={Home} />
// <Route path='/secondPage' component={SecondPage} />
// </Switch>
