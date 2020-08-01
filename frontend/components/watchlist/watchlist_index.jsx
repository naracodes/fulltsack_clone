import React from 'react';
import WatchlistIndexItem from './watchlist_index_item';

class WatchlistIndex extends React.Component {
    componentDidMount() {
        debugger
        this.props.fetchAllWatchlistAssets();
    }

    render() {
        const { watchlistAssets } = this.props;
        debugger
        return (
            <div>
                <ul>
                    {
                        watchlistAssets.map(watchlistAsset => {
                            return <WatchlistIndexItem
                             key={watchlistAsset.id}
                             watchlistAsset={watchlistAsset} 
                            />
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default WatchlistIndex;