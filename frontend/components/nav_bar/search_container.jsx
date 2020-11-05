import React from 'react';
import Search from './search';
import { connect } from "react-redux";
import { fetchAssets } from '../../actions/asset_actions';

const msp = (state, ownProps) => {
    return {
        assets: state.entities.data,
    }
}

const mdp = dispatch => {
    return {
        fetchAssets: () => dispatch(fetchAssets()),
    }
}

export default connect(msp, mdp)(Search);