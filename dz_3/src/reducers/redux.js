const initialState = {
    type: "users",
    data: [ ]
}


export default function reducer(state = initialState, action) {
    if (action.type === "users") {
        state.data = action.data
        console.log(state.data)
    }
    return state
}