import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const defaultState = {
    accessToken: null,
    isLoggedIn: false,
    isLoading: true,
    error: null
}

const reducer = (state, action) => {
    switch(action.type) {
        case "SET_ACCESS_TOKEN": {
            return Object.assign({}, state, {
                accessToken: action.token
            })
        }
        case "IS_LOADING":
            return Object.assign({}, state, {
                isLoading: action.isLoading
            })
        case "HAS_ERRORED":
            return Object.assign({}, state, {
                error: action.error
            })
        case "IS_LOGGED_IN":
            return Object.assign({}, state, {
                isLoggedIn: action.status
            })
        default:
            return state
    }
}

const configureStore = () => {
    return createStore(
        reducer, 
        defaultState,
        composeWithDevTools(
            applyMiddleware(thunk)
        )
    )
}

export default configureStore