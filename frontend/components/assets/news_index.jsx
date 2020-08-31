import React from "react";
import AssetIndexItem from "./asset_index_item";

class AssetIndex extends React.Component {
  componentDidMount() {
    // debugger
    const ticker = this.props.match.params.ticker.toUpperCase();
    this.props.fetchAssetNews(ticker);
  }

  render() {
    const { assetNews } = this.props;
    // debugger
    return (
      <div>
        <div className="asset-index">
          {assetNews.map((article) => {
            return (
              <li>
                {/* <AssetIndexItem key={asset.id} asset={asset} /> */}
              </li>
            );
          })}
        </div>
      </div>
    );
  }
}

export default AssetIndex;

// news API: e6c80b74b664420d8dd71e77555fa65b