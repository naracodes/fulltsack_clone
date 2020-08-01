import React from 'react';
import WatchlistIndex from './watchlist_index'
import { connect } from 'react-redux';
import { fetchAllWatchlistAssets } from '../../actions/watchlist_actions';

const msp = state => {
    return {
        watchlistAssets: Object.values(state.entities.watchlists),
    }
}

const mdp = dispatch => {
    return {
        fetchAllWatchlistAssets: () => dispatch(fetchAllWatchlistAssets()),
    }
}


export default connect(msp, mdp)(WatchlistIndex);