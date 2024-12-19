
function fetchJson (a) {
    return {
        type: "users",
        data: a
    }
}
export function asyncHello () {
    return async function (dispatch) {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        dispatch(fetchJson(data));
    }
}