import React from 'react';
import Toolbar from './navigation/navigation.js';
import Input from './input/myInput.js';
import MyTable from './table/myTable.js';
import MyButton from './buttons/myButtons.js'
import DropDownItem from "./dropDown/dropDown.js"
import "./MyContentPackages.css";

class SecondPage extends React.Component {
  render() {
  return (
    <div>
    <Toolbar />
    <DropDownItem />
    <Input />
    <MyTable />
    <MyButton name='WT Allocation Summury' variant="blue"/>
    <MyButton name="CP's Summury" variant="light"/>
    <button className="boxButton" onClick="">
       <img className="boxImage" src="assets/box-icon.png" alt="Box-Button"/>
     </button>
      </div>
    );
}
}
export default SecondPage;
