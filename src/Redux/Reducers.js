
const initialLoginState = {
    isLoading: true,
    userToken: null,
    apiLoaderVisible : false,
}

const loginReducer = (state = initialLoginState, action) => {
    const prevState = state
    switch (action.type) {
        case 'LOADING_STATUS':
            return {
                ...state,
                apiLoaderVisible : action.value
            }
        case 'RETRIVE_TOKEN':
            return {
                ...state,
                isLoading: false,
                userToken: action.token
            }
        case 'LOGIN':
            return {
                ...state,
                isLoading: false,
                userToken: action.token
            }
        case 'LOGOUT':
            return {
                ...state,
                isLoading: false,
                userToken: null,
            }
        case 'FETCH_STATE':
            return {
                ...state,
                isLoading: true,
                userToken: null,
            }
        default:
            return {
                ...state,
            }
    }
}



export default loginReducer;