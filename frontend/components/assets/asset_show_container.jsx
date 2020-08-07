import React from 'react';
import { connect } from 'react-redux';
import AssetShow from './asset_show';
import {
  fetchAsset,
  fetchPrice,
  fetchCompanyInfo,
  fetchIntraday,
  fetchNews,
  fetchQuoteAndNews,
} from "../../actions/asset_actions";
import { addAssetToWatchlist, deleteAssetFromWatchlist } from '../../actions/watchlist_actions'


export const msp = (state, ownProps) => {
    debugger
    let asset = asset || state.entities.assets[(ownProps.match.params.ticker).toUpperCase()]
    // debugger
    if (!asset) {
        debugger
        return {
            asset: {}
        }
    } else {
        debugger
        return {
            asset: asset,
            currentUser: state.session.user,
            watchlistArr: Object.keys(state.entities.watchlists),
            // company: state.entities.assets || state.entities.company,
            //company: state.entities.assets[ownProps.match.params.ticker]
        }
    }
}

export const mdp = dispatch => {
    debugger
    return {
        fetchAsset: ticker => dispatch(fetchAsset(ticker)),
        fetchPrice: ticker => dispatch(fetchPrice(ticker)),
        clearAsset: () => dispatch(clearAsset()),
        addAssetToWatchlist: (asset, currentUser) => dispatch(addAssetToWatchlist(asset, currentUser)),
        deleteAssetFromWatchlist: (asset, currentUser) => dispatch(deleteAssetFromWatchlist(asset, currentUser)),
        fetchCompanyInfo: ticker => dispatch(fetchCompanyInfo(ticker)),
        fetchIntraday: ticker => dispatch(fetchIntraday(ticker)),
        // fetchNews: ticker => dispatch(fetchNews(ticker)),
        // fetchQuoteAndNews: ticker => dispatch(fetchQuoteAndNews(ticker)),
    }
}


export default connect(msp, mdp)(AssetShow);