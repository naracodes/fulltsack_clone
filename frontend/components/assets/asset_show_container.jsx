import React from 'react';
import { connect } from 'react-redux';
import AssetShow from './asset_show';
import { logout } from '../../actions/session_actions';
import {
  fetchAsset,
  fetchPrice,
  fetchCompanyInfo,
  fetchIntraday,
  fetchRating
} from "../../actions/asset_actions";
import { addAssetToWatchlist, deleteAssetFromWatchlist } from '../../actions/watchlist_actions';
import { fetchAssetNews } from "../../actions/news_actions";
import { addTransaction, fetchPortfolioCashBalance } from '../../actions/transaction_actions';
import { fetchHoldings } from '../../actions/holding_action';


export const msp = (state, ownProps) => {
    let asset = asset || state.entities.assets[(ownProps.match.params.ticker).toUpperCase()];
    let news = state.entities.news ? state.entities.news : {};
    if (!asset) {
        return {
            asset: {}
        }
    } else {
        return {
          asset: asset,
          currentUser: state.session.user,
          watchlistArr: Object.keys(state.entities.watchlists),
          assetNews: Object.values(news),
            portfolio: state.entities.transactions,
        };
    }
}

export const mdp = dispatch => {
    return {
        fetchAsset: ticker => dispatch(fetchAsset(ticker)),
        fetchPrice: ticker => dispatch(fetchPrice(ticker)),
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
    }
}


export default connect(msp, mdp)(AssetShow);