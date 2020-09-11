import React from 'react';
import { Link } from 'react-router-dom';

const WatchlistIndexItem = props => {
    const { watchlistAsset } = props;
    debugger
    return (
        <div>
            <Link to={`/stocks/${watchlistAsset.ticker}`}>
                <span>{watchlistAsset.ticker}</span>
                <span>${watchlistAsset.latest_price.toFixed(2)}</span>
            </Link>
        </div>
    )
}

export default WatchlistIndexItem;