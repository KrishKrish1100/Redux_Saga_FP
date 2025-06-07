import "./App.css";
import Games from "./pages/home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import Booking from "./pages/book";
import Search_Booking from "./pages/search_booking";
class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Games} />
              <Route exact path="/booking" component={Booking} />
              <Route exact path="/search" component={Search_Booking} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
