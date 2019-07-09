import React from "react";
import "./input.css";

class Form extends React.Component {
  state = {
    Program: "",
    Priority: "",
    PackageLevel1: "",
    PackageLevel2: "",
    RelatedWT: "",
    Flag: ""
  };
  handleChange(event) {}
  render() {
    return (
      <div>
        <form>
          <lable>Program:</lable>
          <input type="text" onChange={this.handleChange} />
          <lable>Priority:</lable>
          <input type="text" onChange={this.handleChange}/>
          <lable>Package Level 1:</lable>
          <input className="Level1" type="text" onChange={this.handleChange}/>
          <br />
          <lable>Package Level 2:</lable>
          <input type="text" onChange={this.handleChange}/>
          <lable>Related WT:</lable>
          <input type="text" onChange={this.handleChange}/>
          <lable>Q4`19 Baseline Flag:</lable>
          <input type="text" onChange={this.handleChange}/>
        </form>
      </div>
    );
  }
}

export default Form;
