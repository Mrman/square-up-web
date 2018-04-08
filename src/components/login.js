import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux'
import { requestTokenAction } from '../actions/requestToken'
import { bindActionCreators } from 'redux';

class Login extends Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">
            Welcome to Square Up
          </h1>
          <p>Please sign in below:</p>
          <br/>
        </div>
        <FacebookLogin
            appId="1560055450772174"
            autoLoad={true}
            fields="name,email,picture"
            callback={this.props.actions.requestTokenAction} />
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ 
      requestTokenAction
    }, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Login)

