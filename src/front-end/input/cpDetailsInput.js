import React from "react";
import "./cpDetailsInput.css";

class DetailsInput extends React.Component {
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

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <form className="detailsform">
        <div className="detailsid">
          <label>
            Package <br /> ID:{" "}
          </label>
          <input
            className="detailsbox"
            type="text"
            name="packageId"
            value={this.state.packageId}
            onChange={e => this.change(e)}
          />
        </div>
        <div className="detailsname">
          <label>
            program <br /> Name:{" "}
          </label>
          <input
            className="detailsbox"
            type="text"
            name="programName"
            value={this.state.programName}
            onChange={e => this.change(e)}
          />
        </div>
        <div className="detailslevel1">
          <label>
            Package <br /> Level 1:{" "}
          </label>
          <input
            className="detailsbox"
            type="text"
            name="packageLevel1"
            value={this.state.packageLevel1}
            onChange={e => this.change(e)}
          />
        </div>
        <div className="detailslevel2">
          <label>
            Package <br /> Level 2:{" "}
          </label>
          <input
            className="detailsbox"
            type="text"
            name="packageLevel2"
            value={this.state.packageLevel2}
            onChange={e => this.change(e)}
          />
        </div>
        <div className="detailslevel3">
          <label>
            Package <br /> Level 3:{" "}
          </label>
          <input
            className="detailsbox"
            type="text"
            name="packageLevel3"
            value={this.state.packageLevel3}
            onChange={e => this.change(e)}
          />
        </div>
        <div className="detailspriority">
          <label>
            Priority:
            <br />{" "}
          </label>
          <input
            className="detailsbox"
            type="text"
            name="priority"
            value={this.state.priority}
            onChange={e => this.change(e)}
          />
        </div>
        <div className="detailsrelatedWt">
          <label>
            Related <br />
            WT:{" "}
          </label>
          <input
            className="detailsbox"
            type="text"
            name="relatedWT"
            value={this.state.relatedWT}
            onChange={e => this.change(e)}
          />
        </div>
        <div className="detailsstatus">
          <label>
            Package <br /> Status:{" "}
          </label>
          <input
            className="detailsbox2"
            type="text"
            name="packagesStatus"
            value={this.state.packagesStatus}
            onChange={e => this.change(e)}
          />
        </div>
        <div className="detailsgeneric">
          <label>Generic: </label>
          <input
            className="detailsbox2"
            type="text"
            name="generic"
            value={this.state.generic}
            onChange={e => this.change(e)}
          />
        </div>
        <div className="detailsyear">
          <label>Year: </label>
          <input
            className="detailsbox2"
            type="text"
            name="year"
            value={this.state.year}
            onChange={e => this.change(e)}
          />
        </div>
        <div className="detailsflag">
          <label>
            Q4'19 <br /> Flag:{" "}
          </label>
          <input
            className="detailsbox2"
            type="text"
            name="q419Flag"
            value={this.state.q419Flag}
            onChange={e => this.change(e)}
          />
        </div>
        <div className="detailsq">
          <label>Q: </label>
          <input
            className="detailsbox2"
            type="text"
            name="q"
            value={this.state.q}
            onChange={e => this.change(e)}
          />
        </div>
        <div className="detailsmotivation">
          <label>Motivation: </label>
          <input
            className="detailsbox2"
            type="text"
            name="motivation"
            value={this.state.motivation}
            onChange={e => this.change(e)}
          />
        </div>
        <div className="detailssection">
          <label>
            Related <br /> Section:{" "}
          </label>
          <input
            className="detailsbox2"
            type="text"
            name="relatedSection"
            value={this.state.relatedSection}
            onChange={e => this.change(e)}
          />
        </div>
      </form>
    );
  }
}

export default DetailsInput;
