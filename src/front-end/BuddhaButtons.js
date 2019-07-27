import React from "react";
import Button from "react-bootstrap/Button";
import "./BuddhaButtons.css";

class BuddhaButton extends React.Component {
  render() {
    const { name, variant } = this.props;
    return (
      <div>
        <Button className={variant}>
          {name}
        </Button>
      </div>
    );
  }
}
export default BuddhaButton;