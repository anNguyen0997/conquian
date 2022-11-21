
const reducer = (state, action) => {
    if (state === undefined) {
        state = {
            email : "",
            isLoggedIn: false
        }
    }

    switch (action.type) {
        case "LOGGED_IN":
            return {
                ...state,
                email: "",
                isLoggedIn: true
            }
        
        case "LOGGED_OUT":
            return {
                ...state,
                email: "",
                isLoggedIn: false
            }

        default:
            return state
    }
}

export default reducer