import React from "react";
import "./allContentButtons.css";
// import "../back-end/database/queries/contentPackagesQueries";
import "../AllContentPackages.js";

class Buttons extends React.Component {
  onSubmit = e => {
    e.preventDefault();
    if (e.onClick) return this.addContentPackage();
    // console.log(this.state);
  };

  render() {
    return (
      <form>
        <button className="add" onClick={e => this.onSubmit(e)}>
          ADD CP
        </button>
        <button className="remove" onClick={() => this.removeCP()}>
          Remove CP
        </button>
        <button className="split" onClick={() => this.splitCP()}>
          Split CP
        </button>
        <button className="createFilter">Create Filter</button>
        <button className="editFilter">Edit Filter</button>
        <button className="boxButtonSide">
          <img
            className="boxButtonImg"
            src="assets/box-icon.png"
            alt="Box-Button"
          />
        </button>
      </form>
    );
  }
}
export default Buttons;
