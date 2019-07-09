import React from 'react';
// import Toolbar from './navigation/navigation.js';
import Input from './input/input.js';
import Table from './table/table.js';
import DropDownItem from "./dropDown/dropDown.js"
import "./AllContentPackages.css";

class SecondPage extends React.Component {
  render() {
  return (
    <div>
    Hello world!
    <DropDownItem />
    <Input />
    <Table />
      </div>
    );
}
}
export default SecondPage;
