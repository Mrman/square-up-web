import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux'
import { requestTokenAction } from '../actions/requestToken'
import { bindActionCreators } from 'redux';

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


export default connect(null, mapDispatchToProps)(Root)

