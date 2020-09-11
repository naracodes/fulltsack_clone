import React from 'react';
import { Link } from 'react-router-dom';

const WatchlistIndexItem = props => {
    const { watchlistAsset } = props;
    debugger
    return (
        <div className="single-item">
            {/* <Link to={`/stocks/${watchlistAsset.ticker}`} className="single-link">
            </Link> */}
                <div>
                    <span>{watchlistAsset.ticker}</span>
                </div>
                <div>
                    Graph
                </div>
                <div>
                    <span>${watchlistAsset.latest_price.toFixed(2)}</span>
                </div>
        </div>
    )
}

export default WatchlistIndexItem;