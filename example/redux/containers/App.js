import React, { Component, PropTypes } from "react";
import { createSelector } from "reselect";
import { connect } from "react-redux";
import { addTodo, completeTodo, setVisibilityFilter } from "../actions/index";
import * as Constants from "../constants/index";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import Footer from "../components/Footer";

class App extends Component {
    render(){
        // 通过调用 connect() 注入:
        const { dispatch, visibleTodos, visibilityFilter } = this.props;

        return (
            <div>
                <AddTodo onAddClick={text => dispatch(addTodo(text))}/>
                <TodoList todos={visibleTodos} onTodoClick={index => dispatch(completeTodo(index))}/>
                <Footer filter={visibilityFilter} onFilterChange={nextFilter => dispatch(setVisibilityFilter(nextFilter))}/>
            </div>
        );
    }
}
App.propTypes = {
    visibleTodos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    })),
    visibilityFilter: PropTypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETED',
        'SHOW_ACTIVE'
    ]).isRequired
};

function selectTodos(todos, filter) {
    console.log("selectTodos");
    switch (filter) {
        case Constants.VisibilityFilters.SHOW_ALL:
            return todos;
        case Constants.VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);
        case Constants.VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed);
    }
}


// 基于全局 state ，返回我们想注入的 props
// 注意：使用 https://github.com/faassen/reselect 效果更佳。
// 这是没用reselect的用法
/*
function select(state) {
    return {
        visibleTodos: selectTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    };
}
*/


// 这是reselect的用法
const visibilityFilterSelector = (state) => state.visibilityFilter;
const todosSelector = (state) => state.todos;

const select = createSelector(
    [visibilityFilterSelector, todosSelector],
    (visibilityFilter, todos) => {
        return {
            visibleTodos: selectTodos(todos, visibilityFilter),
            visibilityFilter
        };
    }
);


// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(App);
