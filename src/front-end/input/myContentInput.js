import React from "react";
import './myContentInput.css';

class MyForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
   program: '',
   priority:'',
   packageLevel1:'',
   packageLevel2:'',
   relatedWT:'',
   relatedSection:''
    };
  }

  handleChange(event) {

  }

  render() {
    return (
      <form className="form">
      <div className="program">
        <label>Program: </label>
        <input className="box"
          type="text"
          onChange={this.handleChange}
        />
        </div>
        <div className="priority">
        <label>Priority: </label>
        <input className="box"
          type="text"
          onChange={this.handleChange}
        />
        </div>
        <div className="packageLevel1">
        <label>Package<br />Level 1: </label>
        <input className="box"
          type="text"
          onChange={this.handleChange}
        />
        </div>
        <div className="packageLevel2">
        <label>Packages<br />Level 2: </label>
        <input className="box"
          type="text"
          onChange={this.handleChange}
        />
        </div>
        <div className="relatedWT">
        <label>Related<br />WT: </label>
        <input className="box"
          type="text"
          onChange={this.handleChange}
        />
        </div>
        <div className="relatedSection">
        <label>Related<br />Section: </label>
        <input className="box"
          type="text"
          onChange={this.handleChange}
        />
        </div>
      </form>
    )
  }
}


export default MyForm;
