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
                <ul>
                    {
                        watchlistAssets.map(watchlistAsset => {
                            debugger
                            return <WatchlistIndexItem
                             key={watchlistAsset.id}
                             watchlistAsset={watchlistAsset}
                             currentUser={currentUser}
                            />
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default WatchlistIndex;