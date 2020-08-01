import React from 'react';
import { Link } from 'react-router-dom';

const PostIndexItem = props => {
    const { asset } = props;
    return (
        <li>
            <Link to={`/dashboard/${asset.ticker}`}></Link>
        </li>
    )
}

export default PostIndexItem;