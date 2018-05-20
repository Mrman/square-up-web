import React from 'react';
import {Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

const PrivateRoute = ({component: Component, isAuthenticated, ...rest}) => {
    return <Route
        {...rest}
        render = {
            props => {
                return isAuthenticated ?
                    (
                        <Component {...props} />
                    ) :
                    (
                        <Redirect 
                            to = "/login"
                        />
                    )
            }
        } 
    />
};

const mapStateToProps = state => (
    {
        isAuthenticated : state.login.isLoggedIn 
    }
);

export default withRouter(connect(
    mapStateToProps, null, null, {pure: false}
)(PrivateRoute));