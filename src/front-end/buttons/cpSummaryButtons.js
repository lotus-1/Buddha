import React from "react";
import Button from "react-bootstrap/Button";
import "./cpSummaryButtons.css";

class CpSummaryButton extends React.Component {
  render() {
    const { name, variant } = this.props;
    return (
      <div>
        <Button id="bttn" className={variant}>
          {name}
        </Button>
      </div>
    );
  }
}
export default CpSummaryButton;
