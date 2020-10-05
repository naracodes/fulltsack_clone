import React from 'react';
import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { logout } from "../../actions/session_actions";
import { fetchPortfolioCashBalance } from '../../actions/transaction_actions';
import { fetchPortfoData } from '../../actions/portfo_actions';
import { fetchIntraday, fetchMultipleIntraday } from '../../actions/asset_actions';
import { fetchHoldings } from '../../actions/holding_action';
import { fetchAssetNews } from "../../actions/news_actions";

const msp = state => {
  let news = state.entities.news ? state.entities.news : {};
  // debugger
    return {
      currentUser: state.session.user,
      portfolio: state.entities.transactions,
      portfoData: state.entities.portfos,
      multIntraday: state.entities.assets,
      tickers: state.entities.transactions.holdings,
      assetNews: Object.values(news),
    };
}

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchPortfolioCashBalance: () => dispatch(fetchPortfolioCashBalance()),
    fetchPortfoData: () => dispatch(fetchPortfoData()),
    fetchMultipleIntraday: tickers => dispatch(fetchMultipleIntraday(tickers)),
    fetchHoldings: () => dispatch(fetchHoldings()),
    fetchAssetNews: (ticker) => dispatch(fetchAssetNews(ticker)),
    // fetchIntraday: ticker => dispatch(fetchIntraday(ticker)),
  };
};

export default connect(msp, mdp)(Dashboard);