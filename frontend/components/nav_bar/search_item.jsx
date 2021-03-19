import React from 'react';
import Spinner from '../ui/Spinner';

const SearchItem = props => {
    const { item } = props;
    if (!item) {
        <div>
            <Spinner type="Skinny-loader" />
        </div>
    } else {
        return (
            <div className="single-item">
                    <div className="left-info-watchlist">
                        <span className="stock-name-span">{item.ticker}</span>
                    </div>
                    <div>
                        <span>{item.companyName}</span>
                    </div>
            </div>
        )
    }
}

export default SearchItem;