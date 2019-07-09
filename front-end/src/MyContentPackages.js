import React from 'react';
import Toolbar from './navigation/navigation.js';
import Input from './input/input.js';
import Table from './table/table.js';
import ButtonItem from './buttons/buttons.js'
import DropDownItem from "./dropDown/dropDown.js"
import "./MyContentPackages.css";

class SecondPage extends React.Component {
  render() {
  return (
    <div>
    <Toolbar />
    <DropDownItem />
    <Input />
    <Table />
    <ButtonItem name='WT Allocation Summury' variant="blue"/>
    <ButtonItem name="CP's Summury" variant="light"/>
      </div>
    );
}
}
export default SecondPage;
