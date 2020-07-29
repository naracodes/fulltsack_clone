import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Login from './login';

const msp = (state) => {
    debugger
    return {
        currentUser: {
            email: '',
            password: '',
        },
        errors: state.errors.sessionErrors,
    }
}

const mdp = dispatch => {
    return {
        login: user => dispatch(login(user)),
    }
}

export default connect(msp, mdp)(Login);