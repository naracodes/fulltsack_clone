import React from 'react';
import { Link } from 'react-router-dom';

class AssetShow extends React.Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     assetPrice: this.props.fetchPrice(this.props.asset.ticker)
        // }
        // this.tickPrice = this.tickPrice.bind(this);
    }

    componentDidMount() {
        debugger
        const ticker = this.props.asset.ticker || this.props.match.params.ticker
        debugger
        // const fetchPrice = this.props.fetchPrice
        debugger
        this.props.fetchAsset(ticker);
        this.intervalId = setInterval(() => {
            debugger
            this.props.fetchPrice(ticker)
        }, 2000)
    }

    // tickPrice() {
    //     this.setState({
    //         assetPrice: fetchPrice(this.props.asset.ticker)
    //     })
    // }

    componentWillUnmount() {
        debugger
        clearInterval(this.intervalId)
    }

    render() {
        const { asset } = this.props;
        debugger
        return (
            <div>
                <ul>
                    <li>{asset.symbol}</li>
                    <li>{asset.latestPrice}</li>
                </ul>
            </div>
        )
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