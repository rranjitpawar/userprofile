import React from "react";
import logo from "./logo.svg";
import "./App.css";
import UserList from "./Component/UserList";
import UserProfile from "./Component/UserProfile";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={UserList} />
        <Route exact path="/profile/:userId" component={UserProfile} />
      </Switch>
    </div>
  );
}

export default App;
