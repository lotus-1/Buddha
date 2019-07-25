import React from "react";
import "./allocationButtons.css";

class AllocationButtons extends React.Component {
  onSubmit = e => {
    e.prevrentDefault();
    if (e.onClick) return this.addContentPackage();
    console.log(this.state);
  };

  render() {
    return (
      <div>
      <button className="add" onClick={e => this.onSubmit(e)}>ADD</button>
      <button className="remove" onClick={e => this.onSubmit(e)}>Remove</button>
      <button className="add" onClick={e => this.onSubmit(e)}>ADD</button>
      <button className="remove" onClick={e => this.onSubmit(e)}>Remove</button>
      </div>

    );
  }
}
export default AllocationButtons;
