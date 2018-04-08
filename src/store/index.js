import { createStore, applyMiddleware, compose, combineReducers } from 'redux'

const reducer = (state, action) => {
    switch(action.type) {
        case "VALIDATE_TOKEN":
            console.log(`validate token: ${action.payload}`)
            return Object.assign(state, {"token": action.payload})
        default:
            console.log(`not doing nuffin to: ${state}`)
            return state
    }
}

const configureStore = preloadedState => {
    const store = createStore(
        reducer, 
        {},
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return store
}

export default configureStore