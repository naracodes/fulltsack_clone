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
                <ul>
                    {
                    watchlistAssets.reduce((acc, el) => {
                        debugger
                        return acc + el.latest_price;
                    }, 0).toFixed(2)}
                    {
                        watchlistAssets.map(watchlistAsset => {
                            debugger
                            return (
                                <div>
                                    <div>
                                        <WatchlistIndexItem
                                        key={watchlistAsset.id}
                                        watchlistAsset={watchlistAsset}
                                        currentUser={currentUser}
                                        />
                                    </div>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default WatchlistIndex;