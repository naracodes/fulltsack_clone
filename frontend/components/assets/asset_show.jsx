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

            let shortDescription = asset.description.slice(0, 245);
            let restOfDescription = asset.description.slice(245);
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
                        </div>
                        <ul className='dashboard-list'>
                            {/* <div className="asset-about">
                                <h2>About</h2>
                                <br/>
                                <label>CEO<div>{asset["CEO"]}</div></label>
                                <br/>
                                <label>Employees<div>{asset.employees}</div></label>
                                <label>Headquarters<div>{asset.city}, {asset["state"]}</div></label>
                                <label>Market Cap<div>{asset.marketCap}</div></label>
                                <label>PE Ratio<div>{asset.peRatio}</div></label>
                                <label>Dividend Yield<div>{asset.dividendYield}</div></label>
                                <label>Avg Total Volume<div>{asset.avgTotalVolume}</div></label>
                                <label>Industry<div>{asset.industry}</div></label>
                            </div> */}
                        </ul>
                    </div>
                </div>
            )
        }
    }
}

export default AssetShow;

