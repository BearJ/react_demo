import * as Constants from "../constants/index";

/**
 * action 创建函数
 */
export function addTodo(text) {
    return { type: Constants.ADD_TODO, text };
}

export function completeTodo(index) {
    return { type: Constants.COMPLETE_TODO, index };
}

export function setVisibilityFilter(filter) {
    return { type: Constants.SET_VISIBILITY_FILTER, filter };
}