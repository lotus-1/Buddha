import React from "react";
import "./table.css";

class ProgramTable extends React.Component {
  render() {
    return (
      <div>
        <table className="table">
          <tr>
            <th className="checkboxcolumn"></th>
            <th>Program</th>
            <th>Package <br />ID</th>
            <th>Package <br />Level 1</th>
            <th>Package <br />Level 2</th>
            <th>Package <br />Level 3</th>
            <th>Priority</th>
            <th>Q</th>
            <th>Generic</th>
            <th>Motivation</th>
            <th>Related <br />WT</th>
            <th>Related <br />Section</th>
          </tr>
          <tr>
            <td>
              <input className="checkbox" type="checkbox" checked='' />
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
              <input className="checkbox" type="checkbox" checked=''/>
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
              <input className="checkbox" type="checkbox" checked=''/>
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
              <input className="checkbox" type="checkbox" checked=''/>
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
        </table>
      </div>
    );
  }
}

export default ProgramTable;
