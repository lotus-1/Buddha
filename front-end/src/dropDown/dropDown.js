import React from "react";
import "./dropDown.css";

class DropdownItem extends React.Component {
  render() {
    return (
      <li className="dropdown-option" onClick={this.props.click}>
        {this.props.label}
      </li>
    );
  }
  teamLogo;
}

class DropdownMenu extends React.Component {
  render() {
    let className = "dropdown-select";
    if (this.props.toggled) {
      className += " open";
    }

    return <ul className={className}>{this.props.children}</ul>;
  }
}

class Dropdown extends React.Component {
  constructor() {
    super();

    this.state = {
      toggled: false,
      selected: "Default"
    };
  }

  toggleDropdown() {
    this.setState({ toggled: !this.state.toggled });
  }

  handleClick(value) {
    this.setState({ selected: value });
    this.closeDropdown();
  }

  render() {
    var className = "dropdown-container";

    if (this.props.className) {
      className += " " + this.props.className;
    }

    var dropdown = React.Children.map(this.props.children, (child, i) => {
      var clonedProps = {};
      clonedProps.click = this.handleClick.bind(this, i);

      return React.cloneElement(child, clonedProps);
    });

    return (
      <div className={className} onClick={this.toggleDropdown.bind(this)}>
        <div className="dropdown-label">{this.props.label}</div>
        <div className="dropdown-active">
          {this.props.children[this.state.selected]}
        </div>
        <DropdownMenu toggled={this.state.toggled}>{dropdown}</DropdownMenu>
      </div>
    );
  }
}

const DropDownItem = () => {
  return (
    <div>
      <img
        className="workTeamIcon"
        src="assets/workteamicon.png"
        alt="teamwork"
      />
      <p>Work Team:</p>
      <Dropdown label="All">
        <DropdownItem label="test 1" value="Number 1" />
        <DropdownItem label="test 2" value="2" />
      </Dropdown>
    </div>
  );
};

export default DropDownItem;
