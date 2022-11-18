
const reducer = (state, action) => {
    if (state === undefined) {
        state = {
            count: 0,
            isLoggedIn: false
        }
    }

    switch (action.type) {
        case "ADD_USERS":
            return {

            }

        default:
            return state
    }
}

export default reducer