import React from 'react';
import { connect } from 'react-redux';
import Dashboard from './dashboard';

const msp = state => {
    debugger
    return {
        currentUser: state.session.user,
    }
}

const mdp = dispatch => {
    return {
        logout: () => dispatch(logout()),
    }
}

export default connect(msp, mdp)(Dashboard);