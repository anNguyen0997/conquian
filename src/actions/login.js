export const loggedIn = () => {
    return {
        type: "LOGGED_IN",
        isLoggedIn: true
    }
}

export const loggedOut = () => {
    return {
        type: "LOGGED_OUT",
        isLoggedIn: false
    }
}