import React from "react";
import AssetIndexItem from "./asset_index_item";

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
        <div className="asset-index">
          {assets.map((asset) => {
            // debugger
            return (
              <li>
                <AssetIndexItem key={asset.id} asset={asset} />
              </li>
            );
          })}
        </div>
      </div>
    );
  }
}

export default AssetIndex;
