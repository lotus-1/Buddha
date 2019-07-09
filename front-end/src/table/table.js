import React from 'react';
import ReactTable from 'react-table'
import './table.css';
// import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
// import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';
//
//   class Table extends React.Component {
//     // constructor(props) {
//     //   super(props)
//     // }
//     render() {
//       return (
//         <div>
//         <BootstrapTable className='table' data={this.props.data}>
//             <TableHeaderColumn isKey dataField='id'>
//               ID
//             </TableHeaderColumn>
//             <TableHeaderColumn dataField='name'>
//               Name
//             </TableHeaderColumn>
//             <TableHeaderColumn dataField='value'>
//               Value
//             </TableHeaderColumn>
//             </BootstrapTable>
//         </div>
//       );
//     }
//   }

  class Table extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <ReactTable
      columns={[
        {
        Header: "Program"
      },
      {
        Header: "Package ID"
      },
      {
        Header: "Package Level 1"
      },
      {
        Header: "Package Level 2"
      },
      {
        Header: "Package Level 3"
      },
      {
        Header: "Priority"
      },
      {
        Header: "Q"
      },
      {
        Header: "Generic"
      },
      {
        Header: "Motivation"
      },
      {
        Header: "Related WT"
      },
      {
        Header: "Related Section"
      },
      ]}
      />
    )
  }
}



export default Table;
