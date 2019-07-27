import React from "react";
import Button from "react-bootstrap/Button";
import "../css/BuddhaButtons.css";
class BuddhaButtons extends React.Component {
  handleClick = (e) => {
    console.log("clicked!");
  }
  render() {
    const { name, variant } = this.props;
    return (
      <div>
        <Button id="btn" className={variant} onClick={this.handleClick}>
          {name}
        </Button>
      </div>
    );
  }
}
export default BuddhaButtons;
