import React, { Component } from "react";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import SignUpForm from "./pages/advanced";
import SignInForm from "./pages/basic";
import Back from "../common/back/Back";

import "./App.css";

class App extends Component {
  render() {
    return (
      
      <Router basename="/react-auth-ui/">
        <div className="App">
        <Back/>
          <div className="appAside" />
          <div className="appForm">
            <div className="pageSwitcher">
              <NavLink
                exact
                to="/"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Basic
              </NavLink>
              <NavLink
                exact
                to="/advanced"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Advanced
              </NavLink>
            </div>

            <div className="formTitle">
              <NavLink
                exact
                to="/"
                activeClassName="formTitleLink-active"
                className="formTitleLink"
              >
                Basic
              </NavLink>{" "}
              or{" "}
              <NavLink
                exact
                to="/advanced"
                activeClassName="formTitleLink-active"
                className="formTitleLink"
              >
                Advanced
              </NavLink>
            </div>

            <Route exact path="/" component={SignInForm} />
            <Route path="/advanced" component={SignUpForm} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
