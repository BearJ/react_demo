import fetch from "isomorphic-fetch";
import { requestjQuery, getjQuery } from "../../actions/index";

export function fetchjQuery() {
    return function (dispatch) {
        dispatch(requestjQuery());
        return fetch('https://code.jquery.com/jquery-2.2.3.min.js')
            .then(response => response.text())
            .then(text => {
                text = text.substr(0, 10);
                dispatch(getjQuery(text));
                return text;
            })
            .catch(e => console.log(e));
    }
}