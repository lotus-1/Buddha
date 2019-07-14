import React from 'react';
import Toolbar from './navigation/navigation.js';
import MyForm from './input/myContentInput.js';
import MyTable from './table/myContentTable.js';
import Buttons from './buttons/myContentButtons.js'
import DropDownItem from "./dropDown/dropDown.js"
import "./MyContentPackages.css";

class SecondPage extends React.Component {
  render() {
  return (
    <div>
    <Toolbar />
    <DropDownItem />
    <MyForm />
    <MyTable />
    <Buttons name='WT Allocation Summury' variant="blue"/>
    <Buttons name="CP's Summury" variant="light"/>
    <button className="boxButton" onClick="">
       <img className="boxImage" src="assets/box-icon.png" alt="Box-Button"/>
     </button>
      </div>
    );
}
}
export default SecondPage;
