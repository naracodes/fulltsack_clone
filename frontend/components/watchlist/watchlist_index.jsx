import React from 'react';
import { Link } from "react-router-dom";
import WatchlistIndexItem from './watchlist_index_item';

class WatchlistIndex extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
      }
    }
    componentDidMount() {
      const { fetchAllWatchlistAssets, fetchHoldings, fetchMultipleIntraday } = this.props;
      Promise.all([
        fetchAllWatchlistAssets(),
        fetchHoldings()
      ]).then((res) => {
        const tickers = Object.keys(res[0].assets);
        fetchMultipleIntraday(tickers).then(() => {
          this.setState({
            loading: false,
          });
        })
      })
    }

    render() {
        const { watchlistAssets, currentUser, holdings, data } = this.props;
        if (this.state.loading || !data) {
          return (
            <div>
              Loading...
            </div>
          )
        } else {
          return (
            <div className="watchlist-items box">
              <header id="list-title">
                <div className="watchlist-top">
                  Watchlist
                </div>
              </header>
              {watchlistAssets.map((watchlistAsset) => {
                const ticker = watchlistAsset.ticker;
                return (
                      <Link to={`/stocks/${ticker}`} id="wl-link" key={watchlistAsset.id}>
                        <WatchlistIndexItem
                          key={watchlistAsset.id}
                          watchlistAsset={watchlistAsset}
                          currentUser={currentUser}
                          holdings={holdings}
                          data={data[ticker]["intraday-prices"]}
                        />
                      </Link>
                );
              })}
            </div>
          );
        }
    }
}

export default WatchlistIndex;