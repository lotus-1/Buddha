import React from "react";
import "../css/BuddhaHeader.css";

class BuddhaHeader extends React.Component {
  render() {
    const { header } = this.props;
    return (
      <div>
        <h1>{header}</h1>
      </div>
    );
  }
}
export default BuddhaHeader;
