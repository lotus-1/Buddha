import React, { Component } from "react";
import ReactDOM from "react-dom";
import AllContentPackagesPage from "./front-end/components/AllContentPackagesPage";
import SecondPage from "./front-end/components/MyContentPackages";
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
            <Route exact path="/" component={AllContentPackagesPage} />
            <Route exact path="/secondPage" component={SecondPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
ReactDOM.render(<App />, document.getElementById("root"));
