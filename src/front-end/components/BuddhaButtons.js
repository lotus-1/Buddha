import React from "react";
import Button from "react-bootstrap/Button";
import "../css/BuddhaButtons.css";

class BuddhaButton extends React.Component {
  onSubmit = e => {
    console.log("Button Clicked !");
  };
  render() {
    const { name, variant } = this.props;
    return (
      <div>
        <Button className={variant} onClick={this.onSubmit}>
          {name}
        </Button>
      </div>
    );
  }
}
export default BuddhaButton;
