import React from 'react';
import { Link } from 'react-router-dom';

const WatchlistIndexItem = props => {
    const { watchlistAsset } = props;
    debugger
    return (
        <div>
            <h4>My Watchlist</h4>
            <li>
                <Link>{watchlistAsset.ticker}</Link>
            </li>
        </div>
    )
}

export default WatchlistIndexItem;