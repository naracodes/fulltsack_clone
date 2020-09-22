import React from 'react';
import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { logout } from "../../actions/session_actions";
import { fetchPortfolioCashBalance } from '../../actions/transaction_actions';

const msp = state => {
  debugger
    return {
        currentUser: state.session.user,
        portfolio: state.entities.transactions,
    }
}

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    fetchPortfolioCashBalance: () => dispatch(fetchPortfolioCashBalance()),
  };
};

export default connect(msp, mdp)(Dashboard);