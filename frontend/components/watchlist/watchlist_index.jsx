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
          <div>
            <h3>Your portfolio</h3>
            <div>
                <div>
                    {watchlistAssets
                    .reduce((acc, el) => {
                    debugger;
                    return acc + el.latest_price;
                    }, 0)
                    .toFixed(2)}
                </div>
                <div>
              {watchlistAssets.map((watchlistAsset) => {
                debugger;
                return (
                  <li>
                      <WatchlistIndexItem
                        key={watchlistAsset.id}
                        watchlistAsset={watchlistAsset}
                        currentUser={currentUser}
                      />
                  </li>
                );
              })}
                </div>
            </div>
          </div>
        );
    }
}

export default WatchlistIndex;