import React from 'react';
import { connect } from 'react-redux';
import login from '../../actions/session_actions';
import Login from './login';

const msp = state => {
    return {

    }
}

const mdp = dispatch => {
    return {

    }
}

export default connect(msp, mdp)(Login);