import React from 'react';
import { connect } from 'react-redux';
import AssetShow from './asset_show';
import { fetchAsset, fetchPrice } from '../../actions/asset_actions';

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
        }
    }
}

export const mdp = dispatch => {
    debugger
    return {
        fetchAsset: ticker => dispatch(fetchAsset(ticker)),
        fetchPrice: ticker => dispatch(fetchPrice(ticker))
    }
}


export default connect(msp, mdp)(AssetShow);