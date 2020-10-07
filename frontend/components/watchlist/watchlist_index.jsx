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
      // const watched = watchlistAssets;
      // const owned = Object.keys(data);
      // let missingTickers = watched.filter(ticker => !owned.includes(ticker));
      Promise.all([
        fetchAllWatchlistAssets(),
        fetchHoldings()
      ]).then((res) => {
        const tickers = Object.keys(res[0].assets);
        fetchMultipleIntraday(tickers).then(() => {
          this.setState({
            loading: false,
          })
        })
      })
    }

    render() {
        const { watchlistAssets, currentUser, holdings, data } = this.props;
        debugger
        if (this.state.loading || !data) {
          debugger
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
                console.log(watchlistAsset.ticker)
                debugger
                return (
                      <Link to={`/stocks/${watchlistAsset.ticker}`} id="wl-link" key={watchlistAsset.id}>
                        <WatchlistIndexItem
                          key={watchlistAsset.id}
                          watchlistAsset={watchlistAsset}
                          currentUser={currentUser}
                          holdings={holdings}
                          data={data[watchlistAsset.ticker]["intraday-prices"]}
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