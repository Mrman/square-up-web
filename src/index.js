import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import bulma from 'bulma/css/bulma.css'
import Login from './components/login'
import Home from './components/home'
import PrivateRoute from './components/privateRoute'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

const defaultState = {
  accessToken: null,
  longToken: null,
  isLoggedIn: false,
  isLoading: true,
  error: null
}

const login = (state = defaultState, action) => {
  switch(action.type) {
      case "SET_ACCESS_TOKEN": 
          return Object.assign({}, state, {
              accessToken: action.token
          })
      case "SET_LONG_ACCESS_TOKEN": 
          return Object.assign({}, state, {
              longToken: action.token
          })
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

const history = createHistory()
const middleware = routerMiddleware(history)
const store = createStore(
    combineReducers({
      login,
      router: routerReducer 
    }),
    composeWithDevTools(
        applyMiddleware(thunk, middleware)
    )
)

render(
    <Provider store={store}>
      <AppContainer>
        <ConnectedRouter history={history}>
          <Switch>
            <div>
              <PrivateRoute path="/" component={Home} />
              <Route path="/login" component={Login} />
            </div>
          </Switch>
        </ConnectedRouter>
      </AppContainer>
    </Provider>,
    document.getElementById('app')    
);

if (module.hot) {
    module.hot.accept('./components/login', () => {
      const NewLogin = require('./components/login').default;
      render(
        <Provider store={store}>
          <AppContainer>
            <NewLogin/>
          </AppContainer>
        </Provider>,
        document.body
      );
    });
  }

