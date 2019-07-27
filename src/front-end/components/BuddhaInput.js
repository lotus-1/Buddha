import React from "react";
import "../componentCss/BuddhaInput.css";

class BuddhaInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      packageId: null,
      programName: null,
      packageLevel1: null,
      packageLevel2: null,
      packageLevel3: null,
      priority: null,
      relatedWT: null,
      packagesStatus: null,
      generic: null,
      year: null,
      q419Flag: null,
      q: null,
      motivation: null,
      relatedSection: null
    };
  }
  handleValue(event) {
    this.setState({ inputValue: event.target.value });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: [e.target.value]
    });
  }

  render() {
    const {
      formVariant,
      labelVariant,
      inputName,
      labelInputVariant,
      labelName,
      inputVariant
    } = this.props;
    return (
      <form className={formVariant}>
        <div className={labelInputVariant}>
          <label className={labelVariant}>{labelName}</label>
          <input
            className={inputVariant}
            type="text"
            name={inputName}
            value={this.state.inputValue}
            onChange={e => this.handleChange(e)}
          />
        </div>
      </form>
    );
  }
}
export default BuddhaInput;
