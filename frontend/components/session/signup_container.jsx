import React from 'react';
import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session_actions';
import Signup from './signup';

const msp = (state) => {
    return {
        currentUser: {
            email: '',
            firstName: '',
            lastName: '',
            password: '',
        },
        formType: 'Sign Up',
        errors: state.errors.sessionErrors,
    }
}

const mdp = dispatch => {
    return {
        createNewUser: user => dispatch(createNewUser(user))
    }
}

export default connect(msp, mdp)(Signup);