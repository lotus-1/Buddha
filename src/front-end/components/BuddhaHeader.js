import React from "react";
import "../componentCss/BuddhaHeader.css";

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
