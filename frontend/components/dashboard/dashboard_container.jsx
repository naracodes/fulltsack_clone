import React from 'react';
import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { logout } from "../../actions/session_actions";
import { fetchPortfolioCashBalance } from '../../actions/transaction_actions';
import { fetchPortfoData } from '../../actions/portfo_actions';
import { fetchMultipleIntraday } from '../../actions/asset_actions';
import { fetchHoldings } from '../../actions/holding_action';

const msp = state => {
  // debugger
    return {
        currentUser: state.session.user,
        portfolio: state.entities.transactions,
        porftoData: state.entities.portfos,
        multIntraday: state.entities.assets,
        tickers: state.entities.transactions.holdings,
    }
}

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchPortfolioCashBalance: () => dispatch(fetchPortfolioCashBalance()),
    fetchPortfoData: () => dispatch(fetchPortfoData()),
    fetchMultipleIntraday: tickers => dispatch(fetchMultipleIntraday(tickers)),
    fetchHoldings: () => dispatch(fetchHoldings()),
  };
};

export default connect(msp, mdp)(Dashboard);