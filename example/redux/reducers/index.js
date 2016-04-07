/**
 * 保持 reducer 纯净非常重要。永远不要在 reducer 里做这些操作：
 *   修改传入参数；
 *   执行有副作用的操作，如 API 请求和路由跳转；
 *   调用非纯函数，如 Date.now() 或 Math.random()。
 * 需要谨记 reducer 一定要保持纯净。只要传入参数一样，返回必须一样。没有特殊情况、没有副作用，没有 API 请求、没有修改参数，单纯执行计算。
 */

import * as Constants from "../constants/index";
import { combineReducers } from "redux";

function todos(state = [], action){
    switch(action.type){
        case Constants.ADD_TODO:
            return [...state, {
                text: action.text,
                completed: false
            }];
        case Constants.COMPLETE_TODO:
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {
                    completed: true
                }),
                ...state.slice(action.index + 1)
            ];
        default:
            return state;
    }
}
function visibilityFilter(state = Constants.VisibilityFilters.SHOW_ALL, action) {
    switch (action.type) {
        case Constants.SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}
/*
function todoApp(state = initialState, action) {
    return {
        visibilityFilter: visibilityFilter(state.visibilityFilter, action),
        todos: todos(state.todos, action)
    };
}
*/

// 当你触发 action 后，combineReducers 返回的 todoApp 会负责调用两个 reducer
const todoApp = combineReducers({
    visibilityFilter,
    todos
});

export default todoApp;

/*
// todoAPP还可以这样调用，但不建议。
let previousState = {
    visibleTodoFilter: 'SHOW_ALL',
    todos: [
        {
            text: 'Read the docs.',
            complete: false
        }
    ]
}
let action = {
    type: 'ADD_TODO',
    text: 'Understand the flow.'
}
let nextState = todoApp(previousState, action);
*/