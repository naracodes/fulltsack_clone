import React from 'react';
import WatchlistIndexItem from './watchlist_index_item';

class WatchlistIndex extends React.Component {
    componentDidMount() {
        debugger
        this.props.fetchAllWatchlistAssets();
    }

    render() {
        const { watchlistAssets, currentUser } = this.props;
        debugger
        return (
          <div className="watchlist-items box">
            <header id="list-title">
              <h3>Watchlist</h3>
            </header>
            {watchlistAssets.map((watchlistAsset) => {
              debugger;
              return (
                <div className="watchlist-item" key={watchlistAsset.id}>
                  <div>
                    <WatchlistIndexItem
                      watchlistAsset={watchlistAsset}
                      currentUser={currentUser}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        );
    }
}

export default WatchlistIndex;