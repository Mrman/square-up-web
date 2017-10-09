import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader'

import bulma from 'bulma/css/bulma.css';

import Root from './components/Root';

render(
    <AppContainer>
        <Root/>
    </AppContainer>,
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

