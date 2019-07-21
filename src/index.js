import React, { Component } from "react";
import ReactDOM from "react-dom";
import Home from "./front-end/AllContentPackages";
import SecondPage from "./front-end/MyContentPackages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch("/express_backend");
    const body = await response.json();

    if (response.status !== 200) {
      console.log('error:', body.message);
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
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
ReactDOM.render(<App />, document.getElementById("root"));

