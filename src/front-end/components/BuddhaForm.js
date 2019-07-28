import React from "react";
import "../css/BuddhaForm.css";

class BuddhaForm extends React.Component {
  state = {
    name: ""
  };
  handleValue = e => {
    this.setState({ name: e.target.value });
  };

  handleChange = e => {
    console.log(e.target.value);
  };

  render() {
    const { formVariant, inputName, labelInputVariant, labelName } = this.props;
    return (
      <form className={formVariant} onSubmit={this.handleChange}>
        <div className={labelInputVariant}>
          <label>{labelName}</label>
          <input type="text" name={inputName} onChange={this.handleChange} />
        </div>
      </form>
    );
  }
}
export default BuddhaForm;
