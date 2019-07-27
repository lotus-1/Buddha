import React from "react";
import "../css/BuddhaTable.css";

// const data = [{ }];
// const columns = [
//   {
//     name: 'Title',
//     selector: 'title'
//   },
//   {
//     name: 'Year',
//     selector: 'year'
//   },
// ];
class BuddhaTable extends React.Component {
  render() {
    return (
      <div>
        <table className="allContentTable">
        <tbody>
          <tr>
            <th className="checkboxcolumn" />
            <th>Program</th>
            <th>
              Package <br />
              ID
            </th>
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
            <th>Priority</th>
            <th>Q</th>
            <th>Generic</th>
            <th>Motivation</th>
            <th>
              Related <br />
              WT
            </th>
            <th>
              Related <br />
              Section
            </th>
          </tr>
          </tbody>
          <tbody>
            <tr>
              <td>
                <input className="checkbox" type="checkbox"/>
              </td>
              <td />
              <td />
              <td />
              <td />
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
                <input className="checkbox" type="checkbox" />
              </td>
              <td />
              <td />
              <td />
              <td />
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
                <input className="checkbox" type="checkbox" />
              </td>
              <td />
              <td />
              <td />
              <td />
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
                <input className="checkbox" type="checkbox" />
              </td>
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
};
export default BuddhaTable;
