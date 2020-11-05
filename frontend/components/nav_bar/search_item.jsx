import React from 'react';
import { Link } from 'react-router-dom';

const SearchItem = props => {
    const { item } = props;
    if (!item) {
        <div>
            Loading...
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