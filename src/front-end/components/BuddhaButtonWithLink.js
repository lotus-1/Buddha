import React from "react";
import BuddhaButton from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "../componentCss/BuddhaButtons.css";

class BuddhaButtonWithLink extends React.Component {
  render() {
    const { name, variant, link } = this.props;
    return (
      <div>
        <Link to={link}>
          <BuddhaButton className={variant}>{name}</BuddhaButton>
        </Link>
      </div>
    );
  }
}
export default BuddhaButtonWithLink;
