import React from 'react';
import { Link } from 'react-router-dom';

const WatchlistIndexItem = props => {
    const { watchlistAsset } = props;
    debugger
    return (
        <Link to={`/${watchlistAsset.ticker}`}>
            <li>{watchlistAsset.ticker}</li>
            <li>${watchlistAsset.latest_price.toFixed(2)}</li>
        </Link>
    )
}

export default WatchlistIndexItem;