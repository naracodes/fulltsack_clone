import React from 'react';
import { Link } from "react-router-dom";
import WatchlistIndexItem from './watchlist_index_item';

class WatchlistIndex extends React.Component {
    componentDidMount() {
        this.props.fetchAllWatchlistAssets();
        this.props.fetchHoldings();
    }

    render() {
        const { watchlistAssets, currentUser, holdings } = this.props;
        return (
          <div className="watchlist-items box">
            <header id="list-title">
              <h3>Watchlist</h3>
            </header>
            {watchlistAssets.map((watchlistAsset) => {
              return (
                    <Link to={`/stocks/${watchlistAsset.ticker}`} id="wl-link" key={watchlistAsset.id}>
                      <WatchlistIndexItem
                        key={watchlistAsset.id}
                        watchlistAsset={watchlistAsset}
                        currentUser={currentUser}
                        holdings={holdings}
                      />
                    </Link>
              );
            })}
          </div>
        );
    }
}

export default WatchlistIndex;