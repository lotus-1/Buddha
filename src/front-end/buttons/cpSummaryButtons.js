import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import "./cpSummaryButtons.css";

class ContentPackagesSummaryButton extends React.Component {
  render() {
    const { name, variant, path } = this.props;
    return (
      <Link to={path}>
        <Button id="bttn" className={variant}>
          {name}
        </Button>
      </Link>
    );
  }
}
export default ContentPackagesSummaryButton;
