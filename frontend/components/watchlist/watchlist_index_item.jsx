import React from 'react';
import { Link } from 'react-router-dom';

const WatchlistIndexItem = props => {
    const { watchlistAsset } = props;
    debugger
    return (
        <Link to={`/dashboard/${watchlistAsset.ticker}`}>
            {watchlistAsset.ticker} {"    "} ${watchlistAsset.latest_price.toFixed(2)}
        </Link>
    )
}

export default WatchlistIndexItem;