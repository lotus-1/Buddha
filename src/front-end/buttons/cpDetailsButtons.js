import React from "react";
import "./cpDetailsButtons.css";

class CpDetailsButton extends React.Component {
  onSubmit = e => {
    e.preventDefault();
    if (e.onClick) return this.addContentPackage();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <button className="save" onClick={e => this.onSubmit(e)}>
          Save
        </button>
        <button className="cancle" onClick="">
          Cancle
        </button>
      </div>
    );
  }
}

export default CpDetailsButton;
