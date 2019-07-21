import React from "react";
import "./myContentInput.css";

class MyInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      program: null,
      priority: null,
      packageLevel1: null,
      packageLevel2: null,
      relatedWT: null,
      relatedSection: null
    };
  }

  handleChange(event) {}

  render() {
    return (
      <form className="form">
        <div className="program">
          <label>Program: </label>
          <input className="box" type="text" onChange={this.handleChange} />
        </div>
        <div className="priority">
          <label>Priority: </label>
          <input className="box" type="text" onChange={this.handleChange} />
        </div>
        <div className="package-Level-1">
          <label>
            Package
            <br />
            Level 1:{" "}
          </label>
          <input className="box" type="text" onChange={this.handleChange} />
        </div>
        <div className="package-Level-2">
          <label>
            Packages
            <br />
            Level 2:{" "}
          </label>
          <input className="box" type="text" onChange={this.handleChange} />
        </div>
        <div className="related-WT">
          <label>
            Related
            <br />
            WT:{" "}
          </label>
          <input className="box" type="text" onChange={this.handleChange} />
        </div>
        <div className="related-Section">
          <label>
            Related
            <br />
            Section:{" "}
          </label>
          <input className="box" type="text" onChange={this.handleChange} />
        </div>
      </form>
    );
  }
}

export default MyInput;
