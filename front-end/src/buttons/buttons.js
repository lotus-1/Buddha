import React from "react";
import "./buttons.css";

class Buttons extends React.Component {
  render() {
    return (
      <div>
        <button className="Add" onClick="">
          ADD CP
        </button>
        <button className="Remove" onClick="">
          Remove CP
        </button>
        <button className="Split" onClick="">
          Split CP
        </button>
        <button className="CreateFilter" onClick="">
          Create Filter
        </button>
        <button className="EditFilter" onClick="">
          Edit Filter
        </button>
        <button className="boxButton" onClick="">
          <img src="assets/box-icon.png" alt="Box-Button"/>
        </button>
      </div>
    );
  }
}
export default Buttons;
