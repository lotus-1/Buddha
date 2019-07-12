import React from "react";
import "./buttons.css";

class Buttons extends React.Component {

  onClick() {
  }

  render() {
    return (
      <div>
        <button className="add" onClick={() => this.onClick()}>
          ADD CP
        </button>
        <button className="remove">Remove CP</button>
        <button className="split">Split CP</button>
        <button className="createFilter">Create Filter</button>
        <button className="editFilter">Edit Filter</button>
        <button className="boxButton">
          <img src="assets/box-icon.png" alt="Box-Button" />
        </button>
      </div>
    );
  }
}
export default Buttons;
