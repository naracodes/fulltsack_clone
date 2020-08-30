import React from "react";
import NewsIndex from "./asset_index";
import { connect } from "react-redux";
import { fetchAssetNews } from "../../actions/asset_actions";

const msp = (state) => {
  // debugger
  return {
    // assets: state.entities.assets.data
    assets: Object.values(state.entities.assets),
  };
};

const mdp = (dispatch) => {
  return {
    fetchAssetNews: (ticker) => dispatch(fetchAssetNews(ticker)),
  };
};

export default connect(msp, mdp)(NewsIndex);
