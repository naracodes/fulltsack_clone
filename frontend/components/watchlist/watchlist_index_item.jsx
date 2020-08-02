import React from 'react';
import { Link } from 'react-router-dom';

const WatchlistIndexItem = props => {
    const { watchlistAsset } = props;
    debugger
    return (
        <div>
            <li>
                {watchlistAsset.ticker} - {watchlistAsset.asset_name} - {watchlistAsset.latest_price}
            </li>
        </div>
    )
}

export default WatchlistIndexItem;