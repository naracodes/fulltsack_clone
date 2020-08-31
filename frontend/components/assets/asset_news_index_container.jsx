import React from "react";
import AssetNewsIndex from "./asset_news_index";
import { connect } from "react-redux";
import { fetchAssetNews } from "../../actions/news_actions";

const msp = (state) => {
  debugger;
  let news = state.entities.news ? state.entities.news : {};
  return {
    assetNews: Object.values(news),
    // assetNews: state.entities.news.articles,
  };
};

const mdp = (dispatch) => {
  debugger;
  return {
    fetchAssetNews: (companyName) => dispatch(fetchAssetNews(companyName)),
  };
};

export default connect(msp, mdp)(AssetNewsIndex);
