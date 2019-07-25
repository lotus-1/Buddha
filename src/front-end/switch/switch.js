// // import React from "react";
// // import Switch from "react-switch";
// //
// // class MySwitch extends React.Component {
// //   constructor() {
// //     super();
// //     this.state = { checked: false };
// //     this.handleChange = this.handleChange.bind(this);
// //   }
// //   render() {
// //     return (
// //     <label htmlFor="material-switch">
// //       <span>Switch with style inspired by Material Design</span>
// //       <Switch
// //         checked={this.state.checked}
// //         onChange={this.handleChange}
// //         onColor="#86d3ff"
// //         onHandleColor="#2693e6"
// //         handleDiameter={30}
// //         uncheckedIcon={false}
// //         checkedIcon={false}
// //         boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
// //         activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
// //         height={20}
// //         width={48}
// //         className="react-switch"
// //         id="material-switch"
// //       />
// //     </label>
// //   )
// // }
// // }
// // export default MySwitch;
//
// import React, { Component } from "react";
// import Switch from "react-switch";
//
// // class MySwitch extends Component {
// //   constructor() {
// //     super();
// //     this.state = { checked: false };
// //     this.handleChange = this.handleChange.bind(this);
// //   }
// //
// //   handleChange(checked) {
// //     this.setState({ checked });
// //   }
// //
// //   render() {
// //     return (
// //       <label style= {{ background: isOn && 'blue' }}>
// //         <span>Switch with default style</span>
// //         <Switch onChange={this.handleChange} checked={this.state.checked} />
// //       </label>
// //     );
// //   }
// // }
//
// const MySwitch = ({ isOn, handleToggle }) => {
//   return (
//     <>
//       <input
//         checked={isOn}
//         onChange={handleToggle}
//         className="react-switch-checkbox"
//         id={`react-switch-new`}
//         type="checkbox"
//       />
//       <label
//         style={{ background: isOn && "blue" }}
//         className="react-switch-label"
//         htmlFor={`react-switch-new`}
//       >
//         <span className={`react-switch-button`} />
//       </label>
//     </>
//   );
// };
// export default MySwitch;
