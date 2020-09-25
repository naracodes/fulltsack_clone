import React from 'react';
import WatchlistIndex from './watchlist_index'
import { connect } from 'react-redux';
import { fetchAllWatchlistAssets } from '../../actions/watchlist_actions';
import { fetchHoldings } from '../../actions/holding_action';

const msp = state => {
    return {
        watchlistAssets: Object.values(state.entities.watchlists),
        currentUser: state.session.user,
        holdings: state.entities.transactions.holdings,
    }
}

const mdp = dispatch => {
    return {
        fetchAllWatchlistAssets: () => dispatch(fetchAllWatchlistAssets()),
        fetchHoldings: () => dispatch(fetchHoldings()),
    }
}


export default connect(msp, mdp)(WatchlistIndex);