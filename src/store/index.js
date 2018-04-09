import { createStore, applyMiddleware, compose, combineReducers } from 'redux'

const defaultState = {
    rawPayload: {},
    isLoggedIn: false
}

const reducer = (state, action) => {
    switch(action.type) {
        case "VALIDATE_TOKEN":
            if (action.payload.status && action.payload.status === "unknown") {
                return Object.assign({}, state, {
                    rawPayload: null,
                    isLoggedIn: false
                })
            }
            else {
                return Object.assign({}, state, {
                    rawPayload: action.payload,
                    isLoggedIn: true
                })
            }
        default:
            return state
    }
}

const configureStore = preloadedState => {
    const store = createStore(
        reducer, 
        defaultState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return store
}

export default configureStore