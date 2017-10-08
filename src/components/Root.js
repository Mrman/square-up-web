import React, { Component } from 'react';
import TestComponent from './TestComponent';

export default class Root extends Component {
  render() {
    return (
        <div>
            <TestComponent />
            <h3>Hello!!</h3>
        </div>
    );
  }
}