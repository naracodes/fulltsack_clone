import React from 'react';
import { connect } from "react-redux";
import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions';

const msp = (state, ownProps) => {
    return {
        currentUser: state.session.user,
        ownProps: ownProps,
    }
}

const mdp = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(msp, mdp)(NavBar);