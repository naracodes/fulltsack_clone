import React from 'react';
import AssetIndexItem from './asset_index_item';

class AssetIndex extends React.Component {

    componentDidMount() {
        this.props.fetchAssets();
    }

    render() {
        const { assets } = this.props;
        return (
            <div>
                <div className="asset-index">
                    {
                        assets.map(asset => {
                            return <li><AssetIndexItem 
                             key={asset.id}
                             asset={asset}
                            /></li>
                        })
                    }
                </div>
            </div>
        )
    }

}

export default AssetIndex;