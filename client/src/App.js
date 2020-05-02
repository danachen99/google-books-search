import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search/Search";
import Saved from "./pages/Saved/Saved";
// import NoMatch from "./pages/NoMatch/nomatch";
import Nav from "./components/Nav";
import "./App.css"
function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/"><Search /></Route>
          <Route exact path="/search"><Search /></Route>
          <Route exact path="/saved"><Saved /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
