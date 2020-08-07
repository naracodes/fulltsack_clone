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
          <div className="port-and-watch">
                <div className="portfolio-container">
                    {/* <h3>Your portfolio</h3>
                    {watchlistAssets
                    .reduce((acc, el) => {
                    debugger;
                    return acc + el.latest_price;
                    }, 0)
                    .toFixed(2)} */}
                </div>
                <div className="inner-watch-list-container">
                  <li id="list-title"><h3>Watchlist</h3></li>
                  {watchlistAssets.map((watchlistAsset) => {
                    debugger;
                    return (
                      <div className="watchlist2">
                        <li>
                            <WatchlistIndexItem
                              key={watchlistAsset.id}
                              watchlistAsset={watchlistAsset}
                              currentUser={currentUser}
                            />
                        </li>

                      </div>
                    );
                  })}
                </div>
          </div>
        );
    }
}

export default WatchlistIndex;