import React from 'react';
import AssetIndexItem from './asset_index_item';

class AssetIndex extends React.Component {

    componentDidMount() {
        // debugger
        this.props.fetchAssets();
    }

    render() {
        const { assets } = this.props;
        // debugger
        return (
            <div>
                <ul>
                    {
                        assets.map(asset => {
                            // debugger
                            return <AssetIndexItem 
                             key={asset.id}
                             asset={asset}
                            />
                        })
                    }
                </ul>
            </div>
        )
    }

}

export default AssetIndex;