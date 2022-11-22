
export const loggedIn = (newEmail) => {
    return {
        type: "LOGGED_IN",
        email: newEmail,
        isLoggedIn: true
    
    }
}

export const loggedOut = () => {
    return {
        type: "LOGGED_OUT",
        email: "",
        isLoggedIn: false
    }
}