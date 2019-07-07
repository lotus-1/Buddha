import React from 'react';
import Sidebar from 'react-sidebar';
import './navigation.css';

const navigatorsArray = ['All Content Packages', 'My Content Packages', 'WT Setting' ]
const toolbar = (props) => (
  <Sidebar>
  <table cellspacing="20">
<div>
    <div><img src='/hp-logo.png' alt="hp logo"></img></div>
    <div className='header'>
    Buddha<br /> System
    </div>
</div>
    <tr>
    {navigatorsArray.map(el =>
    <tr className="navigatorRow">
    <a href='/'>{el}</a></tr>)}
    </tr>

  </table>
  </Sidebar>
);



export default toolbar;
