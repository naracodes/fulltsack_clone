import React from 'react';
import { connect } from 'react-redux';
import AssetShow from './asset_show';
import { logout } from '../../actions/session_actions';
import {
  fetchAsset,
  fetchPrice,
  fetchCompanyInfo,
  fetchIntraday,
} from "../../actions/asset_actions";
import { addAssetToWatchlist, deleteAssetFromWatchlist } from '../../actions/watchlist_actions';
import { fetchAssetNews } from "../../actions/news_actions";


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
          // company: state.entities.assets || state.entities.company,
          //company: state.entities.assets[ownProps.match.params.ticker]
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
        fetchIntraday: ticker => dispatch(fetchIntraday(ticker)),fetchAssetNews: (companyName) => dispatch(fetchAssetNews(companyName)),
        fetchAssetNews: (companyName) => dispatch(fetchAssetNews(companyName)),
        logout: () => dispatch(logout()),
    }
}


export default connect(msp, mdp)(AssetShow);