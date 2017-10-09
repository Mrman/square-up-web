import React, { Component } from 'react';
import TestComponent from './TestComponent';

export default class Root extends Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">
            Hello World
        </h1>
          <p className="subtitle">
            My first website with <strong>Bulma</strong>!
        </p>
          <div>
            <TestComponent />
            <h3>Hello!!</h3>
            <a className="button is-primary">Button</a>
          </div>
        </div>
      </section>
    );
  }
}