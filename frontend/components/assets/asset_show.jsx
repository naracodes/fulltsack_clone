import React from 'react';
import { Link } from 'react-router-dom';
import AssetLineChart from "../charts/linechart";

class AssetShow extends React.Component {

    constructor(props) {
        debugger
        super(props);
        // this.state = {
        //     watching: false,
        // }
        this.handleAddToList = this.handleAddToList.bind(this);
        this.handleRemoveFromList = this.handleRemoveFromList.bind(this);
    }

    componentDidMount() {
        // debugger
        const { fetchAsset, fetchCompanyInfo, fetchIntraday } = this.props;
        const ticker = this.props.asset.ticker || this.props.match.params.ticker.toUpperCase()
        debugger
        // const fetchPrice = this.props.fetchPrice
        // debugger
        Promise.all([
            fetchAsset(ticker),
            fetchCompanyInfo(ticker),
            fetchIntraday(ticker),

        ]).then(() => {
            debugger
            console.log('all promises resolved')
        })
        // this.props.fetchAsset(ticker);
        // this.props.fetchCompanyInfo(ticker);
        // this.intervalId = setInterval(() => {
        //     debugger
        //     this.props.fetchPrice(ticker)
        // }, 2000)
    }

    handleAddToList(e) {
        e.preventDefault();
        const { addAssetToWatchlist, currentUser, asset } = this.props;
        // const currentUserId = currentUser.id;
        debugger
        addAssetToWatchlist(asset, currentUser);
    }

    handleRemoveFromList(e) {
        e.preventDefault();
        const { deleteAssetFromWatchlist, currentUser, asset } = this.props;
        debugger
        deleteAssetFromWatchlist(asset, currentUser);
    }

    // componentDidUpdate(prevProps) {
    //     debugger
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
    //     debugger
    //     this.props.clearAsset();
    //     // clearInterval(this.intervalId)
    // }

    render() {
        debugger
        const { asset, watchlistArr } = this.props;
        const ticker = this.props.match.params.ticker.toUpperCase();
        debugger
        if (!this.props.watchlistArr) {
            return null;
        } else {
            debugger
            let button = watchlistArr.includes(ticker) ? (
                <button onClick={this.handleRemoveFromList}>Remove</button>
            ) : (
             <button onClick={this.handleAddToList}>Add</button>
            )
            return (
                <div className="dashboard-body">
                    <ul className='dashboard-list'>
                        <h1>
                        <li className='tg-list-item'>{asset.asset_name} - {asset.symbol}</li>
                        </h1>
                        {/* <li className='tg-list-item'>{asset.latestPrice}</li> */}
                        <li>
                            <AssetLineChart data={asset.chartData} />
                        </li>
                        <div className="asset-about">
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
                            <label>Decription<div>{asset.description}</div></label>
                            <label>Industry<div>{asset.industry}</div></label>
                        </div>
                        {button}
                        <li className='tg-list-item dash1'><Link to={`/dashboard`}>Dashboard</Link></li>
                    </ul>
                </div>
            )
        }
    }

    // render() {
    //     const { asset, assetPrice } = this.props;
    //     if (!asset) {
    //         return null;
    //     } else {
    //         return (
    //             <div>
    //                 <h3>{asset.asset_name}</h3>
    //                 <h5>{this.state.assetPrice}</h5>
    //             </div>
    //         )
    //     }
    // }
}

export default AssetShow;

