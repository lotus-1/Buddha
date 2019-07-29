import React from "react";
import Popup from "reactjs-popup";
import Row from "react-row";
import Col from "react-column";

export default () => (
 <Popup trigger={<button>{props.wtName} </button>} position="center">
   <div> <AllocationStatus /> </div>
 </Popup>
);

class AllocationStatus extends React.Component {
  render() {
    return (
      <div>
        <header> Allocation Status Per Employee/SW </header>
        <div>
          <Row>
            <Col>WT Allocation</Col>
            <Col>WT Staffing</Col>
          </Row>
          <Row>
            <Col>Q419</Col>
            <Col>Q1</Col>
            <Col>Q2</Col>
            <Col>Q3</Col>
            <Col>Q4</Col>

            <Col>Q419</Col>
            <Col>Q1</Col>
            <Col>Q2</Col>
            <Col>Q3</Col>
            <Col>Q4</Col>
          </Row>
        </div>
      </div>
    );
  }
}

// TO DO:
// QUERY FUNCTIONS
// the allocation of each project is sufficient for WT

export default AllocationStatus;
