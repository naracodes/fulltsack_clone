import React from 'react';
import { connect } from 'react-redux';
import AssetShow from './asset_show';
import {
  fetchAsset,
  fetchPrice,
  fetchCompanyInfo,
  fetchIntraday,
} from "../../actions/asset_actions";
import { addAssetToWatchlist, deleteAssetFromWatchlist } from '../../actions/watchlist_actions'


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
            currentUser: state.session.user,
            watchlistArr: Object.keys(state.entities.watchlists),
            // company: state.entities.assets || state.entities.company,
            //company: state.entities.assets[ownProps.match.params.ticker]
        }
    }
}

class AssetLineChart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data } = this.props;
    debugger;
    if (!data) {
      return null;
    } else {
      return (
        <div className="chartContainer">
          <h3>Hello!</h3>
          <h3>{data[data.length - 1].close}</h3>
          <LineChart
            width={600}
            height={300}
            data={this.props.data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis tickLine={false} dataKey="label" hide={true} />
            <YAxis hide={true} domain={["auto", "dataMax"]} />
            <Tooltip />
            <Line type="linear" dataKey="close" stroke="#1aee99" dot={false} />
          </LineChart>
        </div>
      );
    }
  }
}

export const mdp = dispatch => {
    debugger
    return {
        fetchAsset: ticker => dispatch(fetchAsset(ticker)),
        fetchPrice: ticker => dispatch(fetchPrice(ticker)),
        clearAsset: () => dispatch(clearAsset()),
        addAssetToWatchlist: (asset, currentUser) => dispatch(addAssetToWatchlist(asset, currentUser)),
        deleteAssetFromWatchlist: (asset, currentUser) => dispatch(deleteAssetFromWatchlist(asset, currentUser)),
        fetchCompanyInfo: ticker => dispatch(fetchCompanyInfo(ticker)),
        fetchIntraday: ticker => dispatch(fetchIntraday(ticker)),
    }
}


export default connect(msp, mdp)(AssetShow);