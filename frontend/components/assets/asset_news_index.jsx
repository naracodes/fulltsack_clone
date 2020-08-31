import React from "react";

class AssetNewsIndex extends React.Component {
  componentDidMount() {
    debugger
    const { companyName } = this.props;
    this.props.fetchAssetNews(companyName);
  }

  render() {
    const { assetNews } = this.props;
    debugger
    return (
      <div>
        This is news
      </div>
    );
  }
}

export default AssetNewsIndex;

// news API: e6c80b74b664420d8dd71e77555fa65b
