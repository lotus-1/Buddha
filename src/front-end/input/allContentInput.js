import React from "react";
import "./allContentInput.css";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      lable1: "Program:",
      lable2: "Priority:",
      lable3: "Package Level 1:",
      lable4: "Package Level 2:",
      lable5: "Related WT:",
      lable6: "Q4`19 Baseline Flag:"
    };
  }

  handleChange(event) {}
  render() {
    return (
      <form>
        <div>
          <label>{this.state.lable1}</label>
          <input type="text" onChange={this.handleChange} />
          <label>{this.state.lable2}</label>
          <input type="text" onChange={this.handleChange} />
          <label>{this.state.lable3}</label>
          <input type="text" onChange={this.handleChange} />
          <br />
          <label>{this.state.lable4} </label>
          <input type="text" onChange={this.handleChange} />
          <label>{this.state.lable5}</label>
          <input type="text" onChange={this.handleChange} />
          <label>{this.state.lable6}</label>
          <input type="text" onChange={this.handleChange} />
        </div>
      </form>
    );
  }
}

export default Form;
