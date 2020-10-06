import React from 'react';
import WatchlistIndex from './watchlist_index'
import { connect } from 'react-redux';
import { fetchAllWatchlistAssets } from '../../actions/watchlist_actions';
import { fetchHoldings } from '../../actions/holding_action';
import { fetchIntraday } from '../../actions/asset_actions';

const msp = state => {
    return {
        watchlistAssets: Object.values(state.entities.watchlists),
        currentUser: state.session.user,
        holdings: state.entities.transactions.holdings,
        data: state.entities.assets,
    }
}

const mdp = dispatch => {
    return {
        fetchAllWatchlistAssets: () => dispatch(fetchAllWatchlistAssets()),
        fetchHoldings: () => dispatch(fetchHoldings()),
        fetchIntraday: ticker => dispatch(fetchIntraday(ticker)),
    }
}


export default connect(msp, mdp)(WatchlistIndex);