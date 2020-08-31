import React from 'react';
import { Link } from 'react-router-dom';
import AssetLineChart from "../charts/linechart";
// import AssetNewsIndexContainer from '../assets/asset_news_index_container';
import AssetNewsIndex from './asset_news_index';

class AssetShow extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddToList = this.handleAddToList.bind(this);
        this.handleRemoveFromList = this.handleRemoveFromList.bind(this);
    }

    componentDidMount() {
        const { fetchAsset, fetchCompanyInfo, fetchIntraday, fetchAssetNews } = this.props;
        const ticker = this.props.asset.ticker || this.props.match.params.ticker.toUpperCase();
        const companyName = this.props.asset.asset_name ? this.props.asset.asset_name.split(',')[0] : "";
        debugger
        Promise.all([
            fetchCompanyInfo(ticker),
            fetchAsset(ticker),
            fetchIntraday(ticker),
        ]).then((response) => {        
            debugger
            const companyName = response[1].asset.companyName.split(",")[0];
            fetchAssetNews(companyName);
        })
    }

    handleAddToList(e) {
        e.preventDefault();
        const { addAssetToWatchlist, currentUser, asset } = this.props;
        addAssetToWatchlist(asset, currentUser);
    }

    handleRemoveFromList(e) {
        e.preventDefault();
        const { deleteAssetFromWatchlist, currentUser, asset } = this.props;    
        deleteAssetFromWatchlist(asset, currentUser);
    }

    render() {
        const { asset, watchlistArr, assetNews} = this.props;
        const ticker = this.props.match.params.ticker.toUpperCase();
        if (!asset || !watchlistArr) {
            return null;
        } else {
            let shortDescription = asset.description ? asset.description.slice(0, 245) : "";
            let restOfDescription = asset.description ? asset.description.slice(245) : "";
            // let companyName = asset ? asset.asset_name.split(",")[0] : "";
            let button = watchlistArr.includes(ticker) ? (
                <button onClick={this.handleRemoveFromList}>Remove</button>
            ) : (
             <button onClick={this.handleAddToList}>Add</button>
            )
            return (
                <div className="dashboard-body">
                    <div className="asset-showpage-grid">
                        <AssetLineChart data={asset.chartData} company={asset.asset_name} closePrice={asset.close} className="stock-graph"/>
                        <div className="transaction-sidebar">
                            Buy/Sell
                            {button}
                            <Link to={`/dashboard`}>Dashboard</Link>
                        </div>
                        <div className="about">
                            About
                            <div className="asset-description">
                                <input type="checkbox" className="read-more-state" id="description-1"/>
                                <p className="read-more-wrap">{shortDescription} <span className="read-more-target">{restOfDescription}
                                </span></p><label htmlFor="description-1" className="read-more-trigger"></label>
                            </div>
                            <label className="ceo">CEO
                            <div>{asset["CEO"]}</div>
                            </label>
                            <label className="employees">Employees
                            <div>{asset.employees}</div>
                            </label>
                            <label className="hq">Headquarters
                            <div>{asset.city}, {asset["state"]}</div>
                            </label>
                            <label className="founded">Founded
                            <div>????</div>
                            </label>
                            <label className="market-cap">Market Cap
                            <div>{asset.marketCap}</div>
                            </label>
                            <label className="pe-ratio">Price-Earning Ratio
                            <div>{asset.peRatio}</div>
                            </label>
                            <label className="dividend">Dividend Yield
                            <div>{!asset.dividendYield ? "-" : asset.dividendYield}</div>
                            </label>
                            <label className="avg-vol">Average Volume
                            <div>{asset.avgTotalVolume}</div>
                            </label>
                        </div>

                        <div className="collections">
                            Collections placeholder
                        </div>

                        {/* <AssetNewsIndexContainer className="asset-news-stand" companyName={asset.asset_name} /> */}
                        {/* <AssetNewsIndexContainer companyName={asset.asset_name} /> */}
                        <AssetNewsIndex companyName={asset.asset_name} news={assetNews} />

                        <div className="analyst-ratings">
                            Analyst ratings placeholder
                        </div>

                        <div className="earnings">
                            earnings placeholder
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default AssetShow;

