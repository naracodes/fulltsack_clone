import React from 'react';
import { connect } from 'react-redux';
import AssetShow from './asset_show';
import { logout } from '../../actions/session_actions';
import {
    fetch1Week,
  fetchAsset,
  fetchCompanyInfo,
  fetchIntraday,
  fetchRating
} from "../../actions/asset_actions";
import { addAssetToWatchlist, deleteAssetFromWatchlist } from '../../actions/watchlist_actions';
import { fetchAssetNews } from "../../actions/news_actions";
import { addTransaction, fetchPortfolioCashBalance } from '../../actions/transaction_actions';
import { fetchHoldings } from '../../actions/holding_action';


export const msp = (state, ownProps) => {
    let asset = asset || state.entities.assets[(ownProps.match.params.ticker).toUpperCase()] || state.entities.assets;
    debugger
    let news = state.entities.news ? state.entities.news : {};
    if (!asset) {
        return {
            asset: {}
        }
    } else {
        debugger
        return {
          asset: asset,
          currentUser: state.session.user,
          watchlistArr: Object.keys(state.entities.watchlists),
          otherData: state.entities.assets,
          assetNews: Object.values(news),
            portfolio: state.entities.transactions,
        };
    }
}

export const mdp = dispatch => {
    return {
        fetchAsset: ticker => dispatch(fetchAsset(ticker)),
        clearAsset: () => dispatch(clearAsset()),
        addAssetToWatchlist: (asset, currentUser) => dispatch(addAssetToWatchlist(asset, currentUser)),
        deleteAssetFromWatchlist: (asset, currentUser) => dispatch(deleteAssetFromWatchlist(asset, currentUser)),
        fetchCompanyInfo: ticker => dispatch(fetchCompanyInfo(ticker)),
        fetchIntraday: ticker => dispatch(fetchIntraday(ticker)),
        fetchAssetNews: (ticker) => dispatch(fetchAssetNews(ticker)),
        logout: () => dispatch(logout()),
        fetchRating: ticker => dispatch(fetchRating(ticker)),
        fetchPortfolioCashBalance: () => dispatch(fetchPortfolioCashBalance()),
        addTransaction: order => dispatch(addTransaction(order)),
        fetchHoldings: () => dispatch(fetchHoldings()),
        fetch1Week: ticker => dispatch(fetch1Week(ticker)),
    }
}


export default connect(msp, mdp)(AssetShow);