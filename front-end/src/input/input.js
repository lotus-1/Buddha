import React from 'react';
import './input.css';

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
   program: '',
   priority:'',
   packageLevel1:'',
   packageLevel2:'',
   relatedWT:'',
   relatedSection:''
    };
  }

  handleChange(event) {
    
  }

  render() {
    return (
      <form className="form">
      <div className="program">
        <label>Program:</label>
        <input className="box"
          type="text"
          value={this.state.program}
          onChange={this.handleChange}
        />
        </div>
        <div className="priority">
        <label>Priority:</label>
        <input className="box"
          type="text"
          value={this.state.priority}
          onChange={this.handleChange}
        />
        </div>
        <div className="packageLevel1">
        <label>Package<br />Level 1:</label>
        <input className="box"
          type="text"
          value={this.state.packageLevel1}
          onChange={this.handleChange}
        />
        </div>
        <div className="packageLevel2">
        <label>Packages<br />Level 2:</label>
        <input className="box"
          type="text"
          value={this.state.packageLevel2}
          onChange={this.handleChange}
        />
        </div>
        <div className="relatedWT">
        <label>Related<br />WT:</label>
        <input className="box"
          type="text"
          value={this.state.relatedWT}
          onChange={this.handleChange}
        />
        </div>
        <div className="relatedSection">
        <label>Related<br />Section:</label>
        <input className="box"
          type="text"
          value={this.state.relatedSection}
          onChange={this.handleChange}
        />
        </div>
      </form>
    )
  }
}

const App = () => {
  return (
    <div>Good morning
    <Form />
    </div>);

}

export default App;
