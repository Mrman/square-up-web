import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import configureStore from './store'

import bulma from 'bulma/css/bulma.css';

import Root from './components/Root';

const store = configureStore()

render(
    <Provider store={store}>
      <AppContainer>
        <Root/>
      </AppContainer>
    </Provider>,
    document.getElementById('app')    
);

if (module.hot) {
    module.hot.accept('./components/Root', () => {
      const NewRoot = require('./components/Root').default;
      render(
        <AppContainer>
          <NewRoot/>
        </AppContainer>,
        document.body
      );
    });
  }

