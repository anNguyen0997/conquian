
const reducer = (state, action) => {
    if (state === undefined) {
        state = {
            isLoggedIn: false
        }
    }

    switch (action.type) {
        case "LOGGED_IN":
            return {
                ...state,
                isLoggedIn: true
            }
        
        case "LOGGED_OUT":
            return {
                ...state,
                isLoggedIn: false
            }

        default:
            return state
    }
}

export default reducer