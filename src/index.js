import React from "react";
import ReactDOM from "react-dom";
import Home from "./front-end/AllContentPackages";
import SecondPage from "./front-end/MyContentPackages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Root extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/secondPage" component={SecondPage} />
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
