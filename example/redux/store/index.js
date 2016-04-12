import { createStore, applyMiddleware } from "redux";
import trunkMiddleware from "redux-thunk";
import * as Constants from "../constants/index";
import { addTodo, completeTodo, setVisibilityFilter } from "../actions/index";
import { fetchjQuery } from "../middleware/thunk/index";
import todoApp from "../reducers/index"

let todoStore = applyMiddleware(
    trunkMiddleware
)(createStore)(todoApp);

todoStore.dispatch(fetchjQuery()).then((text) =>
    console.log("Finish fetch jQuery", text)
);

/*
let unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(addTodo("Learn about actions"));
store.dispatch(addTodo("Learn about reducers"));
store.dispatch(addTodo("Learn about store"));
store.dispatch(completeTodo(0));
store.dispatch(completeTodo(1));
store.dispatch(setVisibilityFilter(Constants.VisibilityFilters.SHOW_COMPLETED));

unsubscribe();
console.log("Bear");
store.dispatch(addTodo("Learn about actions"));
*/

export default todoStore;