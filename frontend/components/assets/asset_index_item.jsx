import React from 'react';
import { Link } from 'react-router-dom';

const AssetIndexItem = props => {
    const { asset } = props;
    debugger
    return (
        <li>
            <Link to={`/dashboard/${asset.ticker}`}>{asset.ticker} - {asset.asset_name} - {asset.latest_price}</Link>
        </li>
    )
}

export default AssetIndexItem;