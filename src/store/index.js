import { createStore, applyMiddleware, compose, combineReducers } from 'redux'

const configureStore = preloadedState => {
    const store = createStore(
        (state)=>state, 
        {},
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return store
}

export default configureStore