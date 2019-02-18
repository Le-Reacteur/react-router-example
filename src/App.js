import React from "react";
import Home from "./containers/Home";
import About from "./containers/About";
import Article from "./containers/Article";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <>
          <Header />
          <Switch>
            <Route exact path="/" render={props => <Home {...props} />} />
            <Route path="/about" render={props => <About {...props} />} />
            <Route
              path="/article/:articleId"
              render={props => <Article {...props} />}
            />
          </Switch>
        </>
      </Router>
    );
  }
}

export default App;
