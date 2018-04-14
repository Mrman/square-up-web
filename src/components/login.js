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
          { this.props.model.isLoading ?
            <div>
              Please sign in below:
              <p/>
              <FacebookLogin
                appId="1560055450772174"
                autoLoad={true}
                fields="name,email,picture"
                callback={(data) => this.props.actions.requestTokenAction(data)} 
                isDisabled={this.props.model.isLoggedIn}/>
            </div> : 
              <div>Loading...</div> }
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    model: {
      isLoggedIn: state.isLoggedIn,
      isLoading: state.isLoading
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ 
      requestTokenAction
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

