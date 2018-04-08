import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import configureStore from './store'
import bulma from 'bulma/css/bulma.css'
import Login from './components/login'

const store = configureStore()

render(
    <Provider store={store}>
      <AppContainer>
        <Login />
      </AppContainer>
    </Provider>,
    document.getElementById('app')    
);

if (module.hot) {
    module.hot.accept('./components/login', () => {
      const NewLogin = require('./components/login').default;
      render(
        <AppContainer>
          <NewLogin/>
        </AppContainer>,
        document.body
      );
    });
  }

