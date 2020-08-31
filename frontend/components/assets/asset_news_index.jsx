import React from "react";

class AssetNewsIndex extends React.Component {
  // componentDidMount() {
  //   debugger;
  //   const { companyName } = this.props;
  //   // const formatCompanyName = !companyName ? "" : companyName.split(",")[0];
  //   const formatCompanyName = !this.props.companyName ? "" : this.props.companyName.split(",")[0];
  //   this.props.fetchAssetNews(formatCompanyName);
  // }

  render() {
    const { assetNews, companyName, news } = this.props;
    const topThree = !this.props.news ? [] : this.props.news.slice(0, 3);
    debugger
    if (!news) {
      debugger
      return (
        <div className="asset-news-stand">
          This is news stand rendering nothing...
        </div>
      );
    } else {
      debugger
      return (
        <div className="asset-news-stand">
          This is news {!companyName ? "null" : companyName}
          {
            this.props.news.slice(0, 3).map((newsItem, i) => {
            return <li key={i}>{newsItem.title}</li>
            })
          }
        </div>
      );
    }
    }
}

export default AssetNewsIndex;

// news API: e6c80b74b664420d8dd71e77555fa65b
