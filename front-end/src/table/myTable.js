import React from "react";
import "./myTable.css";

class MyTable extends React.Component {
  render() {
    return (
      <div>
        <table className="table">
          <tr className="column">
            <th>Program</th>
            <th>Package ID</th>
            <th>Package <br />Level 1</th>
            <th>Package <br />Level 2</th>
            <th>Package <br />Level 3</th>
            <th>Q</th>
            <th>Total <br />Allocation</th>
            <th>Total Gap</th>
          </tr>
          <tr>
            <td>
            </td>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
          </tr>
          <tr>
            <td>
            </td>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
          </tr>
          <tr>
            <td>
            </td>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
          </tr>
          <tr>
            <td>
            </td>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
          </tr>
        </table>
      </div>
    );
  }
}

export default MyTable;
