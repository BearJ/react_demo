import React, { Component } from "react";
import { Router, Route, Link, browserHistory } from "react-router";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./containers/App";
import todoApp from "./reducers/index";
import todoStore from "./store/index";

class ReduxApp extends Component{
    render() {
        return (
            <Provider store={todoStore}>
                <App />
            </Provider>
        )
    }
}

class About extends Component{
    render() {
        return (
            <h2>My name is Bear.</h2>
        )
    }
}

class IndexApp extends Component{
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/app">app</Link></li>
                    <li><Link to="/about">about</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}

render((
    <Router>
        <Route path="/" component={IndexApp}>
            <Route path="app" component={ReduxApp} />
            <Route path="about" component={About} />
        </Route>
    </Router>
), document.getElementById("root"));