import React from "react";
import AssetNewsIndex from "./asset_index";
import { connect } from "react-redux";
import { fetchAlltNews,fetchAssetNews } from "../../actions/asset_actions";

const msp = (state) => {
  debugger
  return {
    // assets: state.entities.assets.data
    assetNews: Object.values(state.entities.news),
  };
};

const mdp = (dispatch) => {
  return {
    fetchAlltNews: () => dispatch(fetchAlltNews()),
    fetchAssetNews: (companyName) => dispatch(fetchAssetNews(companyName)),
  };
};

export default connect(msp, mdp)(AssetNewsIndex);
