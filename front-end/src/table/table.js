import React from 'react';
// // import ReactTable from 'react-table'
import './table.css';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


  class Table extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      return (
        <div>
        <BootstrapTable className='table1' data={this.props.data}>
            <TableHeaderColumn isKey dataField='Program'>
              Program
            </TableHeaderColumn>
            <TableHeaderColumn className="tableHeader" dataField='Package ID'>
              Package ID
            </TableHeaderColumn>
            <TableHeaderColumn dataField='Package Level 1'>
              Package Level 1
            </TableHeaderColumn>
            <TableHeaderColumn dataField='Package Level 2'>
              Package Level 2
            </TableHeaderColumn>
              <TableHeaderColumn dataField='Package Level 3'>
              Package Level 3
            </TableHeaderColumn>
             <TableHeaderColumn dataField='Priority'>
              Priority
            </TableHeaderColumn>
           <TableHeaderColumn dataField='Q'>
              Q
            </TableHeaderColumn>
            <TableHeaderColumn dataField='Generic'>
              Generic
            </TableHeaderColumn>
           <TableHeaderColumn dataField='Motivation'>
              Motivation
            </TableHeaderColumn>
           <TableHeaderColumn dataField='Related WT'>
             Related WT
            </TableHeaderColumn>
         <TableHeaderColumn dataField='Related Section'>
              Related Section
            </TableHeaderColumn>
            </BootstrapTable>
        </div>
      );
    }
  }


export default Table;
