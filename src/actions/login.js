
export const loggedIn = (email) => {
    return {
        type: "LOGGED_IN",
        email: email,
        isLoggedIn: true
    }
}

export const loggedOut = () => {
    return {
        type: "LOGGED_OUT",
        eamil: "",
        isLoggedIn: false
    }
}