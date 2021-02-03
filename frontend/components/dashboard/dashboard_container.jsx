import React from 'react';
import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { logout } from "../../actions/session_actions";
import { fetchPortfolioCashBalance } from '../../actions/transaction_actions';
import { fetchPortfoData } from '../../actions/portfo_actions';
import { fetchAssets, fetchHistoricalBatch, fetchHistoricalPrices, fetchIntraday, fetchMultipleIntraday } from '../../actions/asset_actions';
import { fetchHoldings } from '../../actions/holding_action';
import { fetchAssetNews } from "../../actions/news_actions";

const msp = state => {
  let news = state.entities.news ? state.entities.news : {};
    return {
      currentUser: state.session.user,
      portfolio: state.entities.transactions,
      portfoData: state.entities.portfos,
      multIntraday: state.entities.assets,
      tickers: state.entities.transactions.holdings,
      assetNews: Object.values(news),
      historicalState: state.entities.historical,
      holdings: state.entities.transactions,
    };
}

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchPortfolioCashBalance: () => dispatch(fetchPortfolioCashBalance()),
    fetchPortfoData: (range) => dispatch(fetchPortfoData(range)),
    fetchMultipleIntraday: tickers => dispatch(fetchMultipleIntraday(tickers)),
    fetchHoldings: () => dispatch(fetchHoldings()),
    fetchAssetNews: (ticker) => dispatch(fetchAssetNews(ticker)),
    fetchAssets: () => dispatch(fetchAssets()),
    // fetchIntraday: ticker => dispatch(fetchIntraday(ticker)),
    fetchHistoricalPrices: (ticker, range) => dispatch(fetchHistoricalPrices(ticker, range)),
    fetchHistoricalBatch: (tickersArr, range) => dispatch(fetchHistoricalBatch(tickersArr, range)),
    fetchMultipleIntraday: tickers => dispatch(fetchMultipleIntraday(tickers)),
  };
};

export default connect(msp, mdp)(Dashboard);