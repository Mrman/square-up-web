import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux'

class Root extends Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">
            Square Up
          </h1>
        </div>
        <FacebookLogin
            appId="1560055450772174"
            autoLoad={true}
            fields="name,email,picture"
            callback={(response)=>console.log(response)} />
      </section>
    );
  }
}

export default Root

