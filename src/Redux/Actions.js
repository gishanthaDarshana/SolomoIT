export const loginAction = (loginToken) => {
    return{
        type : "LOGIN",
        token : loginToken,
    }
}
export const logoutAction = () => {
    return{
        type : "LOGOUT",
    }
}

export const tokenRetriveAction = (token) => {
    return{
        type : "RETRIVE_TOKEN",
        token : token
    }
}

export const fetchStateAction = () => {
    return{
        type : "FETCH_STATE",
    }
}

export const loadingStateAction = (loading) => {
    return{
        type : "LOADING_STATUS",
        value : loading,
    }
}