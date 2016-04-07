import React from "react"
import { render } from "react-dom"
import { createStore } from "redux"
import { Provider } from "react-redux"
import App from "./containers/App"
import todoApp from "./reducers/index"
import todoStore from "./store/index"

let rootElement = document.getElementById("root");
render(
    <Provider store={todoStore}>
        <App />
    </Provider>,
    rootElement
);