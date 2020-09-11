import React from 'react';
import WatchlistIndexItem from './watchlist_index_item';

class WatchlistIndex extends React.Component {
    componentDidMount() {
        this.props.fetchAllWatchlistAssets();
    }

    render() {
        const { watchlistAssets, currentUser } = this.props;
        return (
          <div className="watchlist-items box">
            <header id="list-title">
              <h3>Watchlist</h3>
            </header>
            {watchlistAssets.map((watchlistAsset) => {
              return (
                    <WatchlistIndexItem
                      key={watchlistAsset.id}
                      watchlistAsset={watchlistAsset}
                      currentUser={currentUser}
                    />
              );
            })}
          </div>
        );
    }
}

export default WatchlistIndex;