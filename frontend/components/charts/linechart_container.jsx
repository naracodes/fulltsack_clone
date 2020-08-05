// import React from 'react';
// import { connect } from 'react-redux';
// import { fetchIntraday } from "../../actions/asset_actions";
// import AssetLineChart from './linechart';


// const msp = (state, ownProps) => {
//     debugger
//     return {
//     //   prices: state.entities.assets[ownProps.match.params.ticker.toUpperCase()].chartData,
//         asset: state.entities.assets,
//         ticker: state.entities.assets.symbol,
//         prices: state.entities.assets[state.entities.assets.symbol].chartData,
//     };
// }

// const mdp = dispatch => {
//     return {
//         fetchIntraday: ticker => dispatch(fetchIntraday(ticker)),
//     }
// }


// export default connect(msp, mdp)(AssetLineChart);