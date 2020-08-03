import React from 'react';
import { Link } from 'react-router-dom';

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
        const { fetchAsset, fetchCompanyInfo } = this.props;
        const ticker = this.props.asset.ticker || this.props.match.params.ticker
        debugger
        // const fetchPrice = this.props.fetchPrice
        // debugger
        Promise.all([
            fetchAsset(ticker),
            fetchCompanyInfo(ticker)
        ]).then(() => {
            debugger
            console.log('both asset and company info fetched')
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
        const { asset, watchlistArr, company } = this.props;
        const ticker = this.props.match.params.ticker;
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
                        <li className='tg-list-item'>{asset.asset_name} - {asset.symbol}</li>
                        <li className='tg-list-item'>{asset.latestPrice}</li>
                        <li className='tg-list-item'>{asset.industry}</li>
                        <li className='tg-list-item'>{asset.description}</li>
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

