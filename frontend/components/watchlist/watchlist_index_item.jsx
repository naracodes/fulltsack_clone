import React from 'react';
import { Link } from 'react-router-dom';
import TinyLineChart from '../charts/tiny_linechart';
import numeral from 'numeral';

const WatchlistIndexItem = props => {
    const { watchlistAsset, holdings, data } = props;
    if (!holdings || !watchlistAsset) {
        return null;
    } else {
        let stockHoldings = holdings[watchlistAsset.ticker] ? holdings[watchlistAsset.ticker] : 0;
        
        return (
            <div className="single-item">
                {/* <Link to={`/stocks/${watchlistAsset.ticker}`} className="single-link">
                </Link> */}
                    <div className="left-info-watchlist">
                        <span className="stock-name-span">{watchlistAsset.ticker}</span>
                        {
                            stockHoldings ? (
                                <span>
                                    {
                                        stockHoldings > 1 ? `${stockHoldings} Shares`
                                        : `${stockHoldings} Share`
                                    }
                                </span>
                            ) : null
                        }
                    </div>
                    <div>
                        <TinyLineChart data={data}/>
                    </div>
                    <div>
                        <span>{numeral(watchlistAsset.latest_price).format('$0,0.00')}</span>
                    </div>
            </div>
        )
    }
}

export default WatchlistIndexItem;