import React, { Component } from "react";
import ReactDOM from "react-dom";
import Home from "./front-end/AllContentPackages";
import SecondPage from "./front-end/MyContentPackages";
import CpSummary from "./front-end/CpSummary";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
  callBackendAPI = async () => {
    const response = await fetch("/express_backend");
    const body = await response.json();

    if (response.status !== 200) {
      console.log("error:", body.message);
      throw Error(body.message);
    }
    return body;
  };

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/secondPage" component={SecondPage} />
            <Route exact path="/cpSummary" component={CpSummary} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
ReactDOM.render(<App />, document.getElementById("root"));
