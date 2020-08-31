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
        <div className="asset-index">
          {assetNews.map((news) => {
            return (
              <li key={Math.foor(Math.random() * 100)}>
                {news.title}
              </li>
            );
          })}
        </div>
      </div>
    );
  }
}

export default AssetNewsIndex;

// news API: e6c80b74b664420d8dd71e77555fa65b