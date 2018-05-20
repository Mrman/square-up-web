import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux'
import { requestTokenAction } from '../actions/requestToken'
import { bindActionCreators } from 'redux';

class Home extends Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">
            Welcome to Square Up!
          </h1>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    model: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ 
      requestTokenAction
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)