import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "../componentCss/BuddhaButtons.css";

class BuddhaButtonWithLink extends React.Component {
  render() {
    const { name, variant, link } = this.props;
    return (
      <div>
        <Link to={link}>
          <Button className={variant}>{name}</Button>
        </Link>
      </div>
    );
  }
}
export default BuddhaButtonWithLink;
