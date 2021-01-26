import React from 'react';
import Search from './search';
import { connect } from "react-redux";
import { fetchAssets } from '../../actions/asset_actions';

const msp = (state, ownProps) => {
    debugger
    return {
        assets: state.entities.data,
        asset: state.entities.assets,
        ticker: ownProps.history.location.pathname.split('/')[2],
    }
}

const mdp = dispatch => {
    return {
        fetchAssets: () => dispatch(fetchAssets()),
    }
}

export default connect(msp, mdp)(Search);