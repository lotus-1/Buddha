import React from "react";
import "./myContentTable.css";

class MyTable extends React.Component {
  render() {
    return (
      <table className="table">
        <tr className="column">
          <th>Program</th>
          <th>Package ID</th>
          <th>
            Package <br />
            Level 1
          </th>
          <th>
            Package <br />
            Level 2
          </th>
          <th>
            Package <br />
            Level 3
          </th>
          <th>Q</th>
          <th>
            Total <br />
            Allocation
          </th>
          <th>Total Gap</th>
        </tr>
        <tr>
          <td></td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td></td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td></td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td></td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
      </table>
    );
  }
}

export default MyTable;
