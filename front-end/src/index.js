import React from 'react';
import ReactDom from 'react-dom';
// import ReactTable from 'react-table';
// import 'react-dom/react-table.css';


const TryFunction = () => {
  return (<div>Hello world!</div>);

}


ReactDom.render(
  <TryFunction />,
  document.getElementById('root')
);
