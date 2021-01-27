import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Login from './login';
import { clearErrors } from '../../actions/session_actions'

const msp = (state) => {
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
        clearErrors: () => dispatch(clearErrors()),
    }
}

export default connect(msp, mdp)(Login);