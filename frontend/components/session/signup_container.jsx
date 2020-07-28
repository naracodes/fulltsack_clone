import React from 'react';
import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session_actions';
import Signup from './signup';

const msp = () => {
    return {
        user: {
            email: '',
            firstName: '',
            lastName: '',
            password: '',
        },
        formType: 'Sign Up'
    }
}

const mdp = dispatch => {
    return {
        createNewUser: user => dispatch(createNewUser(user))
    }
}

export default connect(msp, mdp)(Signup);