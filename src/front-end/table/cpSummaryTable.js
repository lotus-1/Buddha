import React from "react";
import "./cpSummaryTable.css";

class ContentPackagesSummaryTable extends React.Component {
  render() {
    return (
        <table className="cpTable">
          <tr className="cpColumn">
            <th> </th>
            <th>Q1</th>
            <th>Q2</th>
            <th>Q3</th>
            <th>Q4</th>
          </tr>
          <tr>
            <td>Total HC Allocation</td>
            <td />
            <td />
            <td />
            <td />
          </tr>
          <tr>
            <td>Total Gap</td>
            <td />
            <td />
            <td />
            <td />
          </tr>
        </table>
    );
  }
}

export default ContentPackagesSummaryTable;
