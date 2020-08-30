import React from 'react';
import { Link } from 'react-router-dom';
import AssetLineChart from "../charts/linechart";

class AssetShow extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     fullDescription: this.props.asset.description,
        // }
        this.handleAddToList = this.handleAddToList.bind(this);
        this.handleRemoveFromList = this.handleRemoveFromList.bind(this);
    }

    componentDidMount() {
        const { fetchAsset, fetchCompanyInfo, fetchIntraday, fetchNews } = this.props;
        const ticker = this.props.asset.ticker || this.props.match.params.ticker.toUpperCase();
        Promise.all([
            fetchCompanyInfo(ticker),
            fetchAsset(ticker),
            fetchIntraday(ticker),
            // fetchNews(ticker),

        ]).then(() => {        
            console.log('all promises resolved')
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

    // componentDidUpdate(prevProps) {
    //     if (this.props.latestPrice !== prevProps.latestPrice) {
    //         this.props.fetchAsset(this.props.match.params.ticker)
    //     }
    // }

    // tickPrice() {
    //     this.setState({
    //         assetPrice: fetchPrice(this.props.asset.ticker)
    //     })
    // }

    // componentWillUnmount() {
    //     this.props.clearAsset();
    //     // clearInterval(this.intervalId)
    // }

    render() {
        const { asset, watchlistArr } = this.props;
        const ticker = this.props.match.params.ticker.toUpperCase();
        if (!asset || !watchlistArr) {
            debugger
            return null;
        } else {
            let shortDescription = asset ? asset.description.slice(0, 245) : "";
            let restOfDescription = asset ? asset.description.slice(245) : "";
            let button = watchlistArr.includes(ticker) ? (
                <button onClick={this.handleRemoveFromList}>Remove</button>
            ) : (
             <button onClick={this.handleAddToList}>Add</button>
            )
            return (
                <div className="dashboard-body">
                    <div className="asset-showpage-grid">
                        <AssetLineChart data={asset.chartData} company={asset.asset_name} className="stock-graph"/>
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
                    </div>
                </div>
            )
        }
    }
}

export default AssetShow;

