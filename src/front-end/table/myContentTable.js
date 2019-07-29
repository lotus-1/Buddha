import React from "react";
import "./myContentTable.css";

class MyTable extends React.Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default MyTable;

// import React from 'react';
// import './myContentTable.css';
// import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
//
//     class myTable extends React.Component {
//     render() {
//       return (
//         <BootstrapTable>
//             <TableHeaderColumn className="tableHeader" isKey dataField='Program'>
//               Program
//             </TableHeaderColumn>
//             <TableHeaderColumn className="tableHeader" dataField='Package ID' dataSort="false">
//               Package ID
//             </TableHeaderColumn>
//             <TableHeaderColumn className="tableHeader" dataField='Package Level 1'>
//               Package Level 1
//             </TableHeaderColumn>
//             <TableHeaderColumn className="tableHeader" dataField='Package Level 2'>
//               Package Level 2
//             </TableHeaderColumn>
//               <TableHeaderColumn className="tableHeader" dataField='Package Level 3'>
//               Package Level 3
//             </TableHeaderColumn>
//              <TableHeaderColumn className="tableHeader" dataField='Priority'>
//               Priority
//             </TableHeaderColumn>
//            <TableHeaderColumn className="tableHeader" dataField='Q'>
//               Q
//             </TableHeaderColumn>
//             <TableHeaderColumn className="tableHeader" dataField='Generic'>
//               Generic
//             </TableHeaderColumn>
//            <TableHeaderColumn className="tableHeader" dataField='Motivation'>
//               Motivation
//             </TableHeaderColumn>
//            <TableHeaderColumn  className="tableHeader" dataField='Related WT'>
//              Related WT
//             </TableHeaderColumn>
//          <TableHeaderColumn className="tableHeader" dataField='Related Section'>
//               Related Section
//             </TableHeaderColumn>
//             </BootstrapTable>
//       );
//     }
//   }
//
//
// export default myTable;
