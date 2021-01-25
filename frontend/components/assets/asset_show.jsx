import React from "react";
import { Link } from "react-router-dom";
import AssetLineChart from "../charts/linechart";
import StackedChart from "../charts/rating_chart";
import CustomTooltip from '../charts/custom_tooltip';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPizzaSlice, faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  faAngellist,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import numeral from 'numeral';
import moment from 'moment';
import NavBar from "../nav_bar/nav_bar";

class AssetShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddToList = this.handleAddToList.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleRemoveFromList = this.handleRemoveFromList.bind(this);
    // this.handleKeyDown = this.handleKeyDown.bind(this);
    // this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleClickOutside_invest = this.handleClickOutside_invest.bind(this);
    // this.showDropdown = this.showDropdown.bind(this);
    this.showDropdown2 = this.showDropdown2.bind(this);
    this.updateInvestOption = this.updateInvestOption.bind(this);
    this.handleBuy = this.handleBuy.bind(this);
    // this.wrapperRef = React.createRef();
    this.wrapperRef_invest = React.createRef();
    this.handleBuyClick = this.handleBuyClick.bind(this);
    this.handleSellClick = this.handleSellClick.bind(this);
    this.toggleShowMore = this.toggleShowMore.bind(this);
    this.handleRangeClick = this.handleRangeClick.bind(this);
    // this.calculatePortfo = this.calculatePortfo.bind(this);
    this.state = {
      intraday: "",
      data: "",
      clickedRange: "1D",
      showMoreClicked: false,
      orderErrorMessage: null,
      orderMessage: null,
      successMessage: null,
      reviewOrderClicked: false,
      loading: true,
      showDropdown: false,
      stocksOwned: "",
      investInDropdown: false,
      buyColor: "#00C805",
      sellColor: "black",
      buyClicked: true,
      sellClicked: false,
      buyingPower: null,
      investOption: "Dollars",
      estQuantity: 0,
      estCost: 0,
      order: {
        user_id: "",
        ticker: "",
        transaction_type: "Buy",
        cost_per_share: "",
        transaction_amount: "",
        quantity: "",
      },
    };
  }
 
  handleRangeClick(e) {
    const { fetchIntraday, fetch1Week } = this.props;
    const ticker = this.props.match.params.ticker.toUpperCase();
    let range = e.target.textContent;
    let adjustedFetch;
    if (range === "1D") {
      this.setState({ data: this.state.intraday, loading: false })
    } else if (range === "1W") {
      fetch1Week(ticker).then(res => {
        this.setState({
          loading: false,
          data: res.data
        })
      })
    }
  }

  toggleShowMore() {
    this.setState({
      showMoreClicked: !this.state.showMoreClicked
    });
  }

  handleBuyClick(e) {
    e.preventDefault();
    this.setState(
      {
        buyColor: "#00C805",
        sellColor: "black",
        buyClicked: true,
        sellClicked: false,
        order: { transaction_type: "Buy" },
        loading: false,
        orderMessage: null,
        orderErrorMessage: null,
        reviewOrderClicked: false,
        successMessage: null,
      });
  }

  handleSellClick(e) {
    e.preventDefault();
    this.setState(
      {
        sellColor: "#00C805",
        buyColor: "black",
        sellClicked: true,
        buyClicked: false,
        order: { transaction_type: "Sell" },
        orderMessage: null,
        orderErrorMessage: null,
        reviewOrderClicked: false,
        successMessage: null,
      });
  }

  // handleKeyDown(e) {
  //   // e.preventDefault();
  //   return (e) => {
  //     if (e.keyCode === 13) {
  //       this.props.history.push(
  //         `/stocks/${e.currentTarget.value.toUpperCase()}`
  //       );
  //     } else {
  //       return;
  //     }
  //   };
  // }

  handleBuy(e) {
    const { investOption, buyClicked, sellClicked, reviewOrderClicked, order, orderErrorMessage, successMessage, orderMessage } = this.state;
    const { addTransaction, addAssetToWatchlist, portfolio, assets, currentUser, watchlistArr } = this.props;
    const ticker = this.props.match.params.ticker.toUpperCase();
    let stockHoldings = portfolio.holdings[ticker] ? portfolio.holdings[ticker] : 0;
    let buyingPowerAvailable = portfolio.balance;

    e.preventDefault();
    if (buyClicked) {
      if (investOption === "Shares") {
        if (!reviewOrderClicked && (buyingPowerAvailable >= order.transaction_amount) && !successMessage) {
          this.setState({
            reviewOrderClicked: true,
            orderMessage: `You are placing an order to ${
              buyClicked ? "buy" : "sell"
            } ${order.quantity} ${order.quantity > 1 ? "shares" : "share"} of ${
              order.ticker
            } based on the current market price of $${
              order.cost_per_share} for a total cost of ${numeral(order.transaction_amount).format('$0,0.00')}.`,
          });
        } else if (!reviewOrderClicked && buyingPowerAvailable < order.transaction_amount && !successMessage) {
          this.setState({
            reviewOrderClicked: true,
            orderErrorMessage: `Not enough buying power. You only have enough buying power to purchase ${(buyingPowerAvailable / order.cost_per_share).toFixed(3)} shares of ${ticker}.`,
          }, () => console.log(this.state))
        } else if (reviewOrderClicked && orderErrorMessage) {
          this.setState({
            reviewOrderClicked: false,
            orderErrorMessage: null,
          })
        } else if (!reviewOrderClicked && !orderErrorMessage && !orderMessage) { 
          this.setState({
            successMessage: null,
            order: { quantity: "" },
          });
        } else {

          Promise.all([
            addTransaction(order)
          ])
          .then(() => {
            if (!watchlistArr.includes(ticker)) {
              debugger
              const asset = assets[ticker];
              addAssetToWatchlist(asset, currentUser);
            };
            this.setState({
              orderErrorMessage: null,
              orderMessage: null,
              successMessage: `You have successfully submitted an order to buy ${order.quantity} shares of ${order.ticker}
              for a total cost of ${numeral(order.transaction_amount).format('$0,0.00')}.`,
              reviewOrderClicked: false,
            })
          })
        }
      }
    } else if (sellClicked) {
      if (investOption === "Shares") {
        if (!reviewOrderClicked && (stockHoldings >= order.quantity) && !successMessage) {
          this.setState({
            reviewOrderClicked: true,
            orderMessage: `You are placing an order to ${
              buyClicked ? "buy" : "sell"
            } ${order.quantity} ${order.quantity > 1 ? "shares" : "share"} of ${
              order.ticker
            } based on the current market price of $${
              order.cost_per_share
            } for a total cost of $${numeral(order.transaction_amount).format('$0,0.00')}.`,
          });
        } else if (!reviewOrderClicked && stockHoldings < order.quantity && !successMessage) {
          this.setState({
            reviewOrderClicked: true,
            orderErrorMessage: `Not enough shares. You can only sell up to ${stockHoldings} ${
              stockHoldings > 1 ? "shares" : "share"
            } of ${order.ticker}.`,
          }, () => console.log(this.state));
        } else if (reviewOrderClicked && orderErrorMessage) {
          this.setState({
            reviewOrderClicked: false,
            orderErrorMessage: null,
          })
        } else if (!reviewOrderClicked && !orderErrorMessage && !orderMessage) {
          this.setState({
            successMessage: null,
            order: { quantity: "" },
          });
        } else {
          this.props.addTransaction(order)
          .then(() => {
            this.setState({
              orderErrorMessage: null,
              orderMessage: null,
              successMessage: `You have successfully submitted an order to sell ${order.quantity} shares of ${order.ticker}
              for a total credit of ${numeral(order.transaction_amount).format('$0,0.00')}.`,
              reviewOrderClicked: false,
            })
          })
        }
      }
    }
  }

  handleLogOut(e) {
    e.preventDefault();
    this.props.logout().then(() => {
      this.props.history.push("/login");
    });
  }

  updateInvestOption(e) {
    e.preventDefault();
    this.setState({
      investOption:
        this.state.investOption === "Dollars" ? "Shares" : "Dollars",
    });
  }

  update(field) {
    const { assets, currentUser, ticker } = this.props;
    let asset = assets[ticker];
    let closingPrice =
      asset.close ||
      asset.data[asset.data.length - 1].close ||
      asset.data[asset.data.length - 2].close;
    return (e) => {
      if (field === "Dollars") {
        this.setState({
          estQuantity: (e.currentTarget.value / closingPrice).toFixed(6),
        });
      } else {
        this.setState({
          estCost: (e.currentTarget.value * closingPrice).toFixed(2),
          order: {
            user_id: currentUser.id,
            ticker: asset.ticker,
            transaction_type: this.state.order["transaction_type"],
            cost_per_share: closingPrice,
            transaction_amount: (e.currentTarget.value * closingPrice).toFixed(2),
            quantity: e.currentTarget.value,
          },
        });
      }
    };
  }

  // handleClickOutside(e) {
  //   if (this.wrapperRef && !this.wrapperRef.current.contains(e.target)) {
  //     this.setState({
  //       showDropdown: false,
  //     });
  //   }
  // }

  handleClickOutside_invest(e) {
    if (
      this.wrapperRef_invest &&
      !this.wrapperRef_invest.current.contains(e.target)
    ) {
      this.setState({
        investInDropdown: false,
      });
    }
  }

  // calculatePortfo() {
  //   const { asset, portfolio } = this.props;
  //   let closingPrice =
  //     asset.close ||
  //     asset.data[asset.data.length - 1].close ||
  //     asset.data[asset.data.length - 2].close;
  //   let cashBalance = portfolio.balance;
  //   let holdings = portfolio.holdings;
  //   Object.keys(holdings).forEach(ticker => {
  //     if (holdings[ticker]) {
  //       cashBalance += 
  //     }
  //   })
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   debugger
  //   if (this.props.ticker === nextProps.match.params.ticker) {
  //     return true;
  //   } else {
  //     return false;
  //   };
  // }



  // componentDidUpdate(prevProps, prevState) {
  //   const { fetchAsset } = this.props;
  //   debugger
  //   if (this.props.ticker !== prevProps.match.params.ticker) {
  //       const {
  //         fetchAsset,
  //         fetchCompanyInfo,
  //         fetchIntraday,
  //         fetch1Week,
  //         fetchAssetNews,
  //         fetchRating,
  //         fetchPortfolioCashBalance,
  //         fetchHoldings,
  //         fetchAllWatchlistAssets,
  //       } = this.props;
  //       const { clickedRange } = this.state;
  //       let fetchClickedRange;
  //       if (clickedRange === "1D") {
  //         fetchClickedRange = fetchIntraday;
  //       } else if (clickedRange === "1W") {
  //         fetchClickedRange = fetch1Week;
  //       };

  //       const ticker = this.props.match.params.ticker.toUpperCase();
  //       Promise.all([
  //         fetchAsset(ticker),
  //         fetchClickedRange(ticker),
  //         // fetchIntraday(ticker),
  //         fetchCompanyInfo(ticker),
  //         fetchAssetNews(ticker),
  //         fetchPortfolioCashBalance(),
  //         fetchHoldings(),
  //         fetchAllWatchlistAssets(),
  //         fetchRating(ticker),
  //       ]).then((response) => {
  //         console.log('all fetched')
  //         this.setState({ loading: false, intraday: response[1].assetIntraday })
  //       });
  //   }
  // }


  componentDidMount() {
    const {
      fetchAsset,
      fetchCompanyInfo,
      fetchIntraday,
      fetch1Week,
      fetchAssetNews,
      fetchRating,
      fetchPortfolioCashBalance,
      fetchHoldings,
      fetchAllWatchlistAssets,
    } = this.props;
    const { clickedRange } = this.state;
    let fetchClickedRange;
    if (clickedRange === "1D") {
      fetchClickedRange = fetchIntraday;
    } else if (clickedRange === "1W") {
      fetchClickedRange = fetch1Week;
    };
    const ticker = this.props.match.params.ticker.toUpperCase();
    debugger
    Promise.all([
      fetchAsset(ticker),
      fetchClickedRange(ticker),
      // fetchIntraday(ticker),
      fetchCompanyInfo(ticker),
      fetchAssetNews(ticker),
      fetchPortfolioCashBalance(),
      fetchHoldings(),
      fetchAllWatchlistAssets(),
      fetchRating(ticker),
    ]).then((response) => {
      console.log('all fetched')
      this.setState({ loading: false, intraday: response[1].assetIntraday })
    });
    document.addEventListener("mousedown", this.handleClickOutside);
    document.addEventListener("mousedown", this.handleClickOutside_invest);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
    document.removeEventListener("mousedown", this.handleClickOutside_invest);
    // this.props.clearAsset();
    // this.setState({loading: true});
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   // debugger
  //   // this.forceUpdate();
  //   // return this.props.ticker === nextProps.ticker;
  //   // const nextTicker = window.localStorage.getItem("nextTicker")
  //   // return this.state.loading
  // }

  handleAddToList(e) {
    e.preventDefault();
    const { addAssetToWatchlist, currentUser, assets, ticker } = this.props;
    addAssetToWatchlist(assets[ticker], currentUser);
  }

  handleRemoveFromList(e) {
    e.preventDefault();
    const { deleteAssetFromWatchlist, currentUser, assets, ticker } = this.props;
    deleteAssetFromWatchlist(assets[ticker], currentUser);
  }

  showDropdown2(e) {
    e.preventDefault();
    return this.setState({ investInDropdown: !this.state.investInDropdown });
  }

  render() {
    const {
      assets,
      watchlistArr,
      assetNews,
      currentUser,
      portfolio,
      holdings,
      watchlist,
      ticker,
    } = this.props;
    if (this.state.loading || !portfolio || !assets || !ticker || !assets[ticker] ) {
      return (
        <div>
          Loading...
        </div>
      )
    } else {
      // this.setState({loading:true})
      let asset = assets[ticker];
      let stockHoldings = portfolio.holdings ? portfolio.holdings[asset.ticker] : 0;
      console.log(ticker)
      let rating = asset.rating ? asset.rating[0] : undefined;
      let closingPrice =
        asset.close ||
        asset.data[asset.data.length - 1].close ||
        asset.data[asset.data.length - 2].close;
      let buyingPowerAvailable = portfolio.balance.toFixed(2);
      let button = watchlistArr.includes(ticker) ? (
        <button className="add-button" onClick={this.handleRemoveFromList}>
          Remove
        </button>
      ) : (
        <button className="add-button" onClick={this.handleAddToList}>
          Add
        </button>
      );
      return (
        <div className="asset-show-outermost">
          <NavBar
           currentUser={currentUser}
            buyingPowerAvailable={buyingPowerAvailable}
            history={this.props.history}
            logout={this.props.logout}
            portfoValue={+window.localStorage.getItem("portfoVal")}
           />
          <div className="asset-container">
            <main className="main-container">
              <div className="row">
                <div className="left col-1">
                  <header className="stock-name">
                    <h1>{asset.asset_name}</h1>
                  </header>
                  <div>
                    <section className="graph-section">
                      <header className="asset-price"></header>
                      <div className="react-chart">
                        <AssetLineChart
                          data={this.state.data || asset.data}
                          company={asset.asset_name}
                          closePrice={closingPrice}
                          className="stock-graph"
                          prevClose={asset.previousClose}
                          range={this.state.clickedRange}
                        />
                      </div>
                      <nav className="range">
                        <div className="range-buttons">
                          <div className="1D">
                            <span onClick={this.handleRangeClick}>1D</span>
                          </div>
                          <div className="1W">
                            <span onClick={this.handleRangeClick}>1W</span>
                          </div>
                          <div className="1M">
                            <span>1M</span>
                          </div>
                          <div className="3M">
                            <span>3M</span>
                          </div>
                          <div className="1Y">
                            <span>1Y</span>
                          </div>
                          <div className="5Y">
                            <span>5Y</span>
                          </div>
                        </div>
                      </nav>
                    </section>
                    <section className="about-section">
                      <header className="about-heading">
                        <div className="about-div">
                          <div className="about-div-inner">
                            <h2 className="about-h2">
                              <span>About</span>
                            </h2>
                            <button onClick={this.toggleShowMore}>{this.state.showMoreClicked ? "Show Less" : "Show More"}</button>
                          </div>
                        </div>
                      </header>
                      <div className="company-description">
                        <h3>
                          <span className="company-span">
                            {asset.description}
                          </span>
                        </h3>
                      </div>
                      <div className="info-grid">
                        <div className="asset-info">
                          <span className="info-label">
                            <div className="info-label-div">CEO</div>
                          </span>
                          <div className="info-data">{asset["CEO"]}</div>
                        </div>
                        <div className="asset-info">
                          <span className="info-label">
                            <div className="info-label-div">Employees</div>
                          </span>
                          <div className="info-data">{numeral(asset.employees).format('0,0')}</div>
                        </div>
                        <div className="asset-info">
                          <span className="info-label">
                            <div className="info-label-div">Headquarters</div>
                          </span>
                          <div className="info-data">{`${asset.city}, ${asset["state"]}`}</div>
                        </div>
                        <div className="asset-info">
                          <span className="info-label">
                            <div className="info-label-div">Sector</div>
                          </span>
                            <div className="info-data">{asset.sector}</div>
                        </div>
                        <div className="asset-info">
                          <span className="info-label">
                            <div className="info-label-div">Market Cap</div>
                          </span>
                          <div className="info-data capitalize">{numeral(asset.marketCap).format('0.00a')}</div>
                        </div>
                        <div className="asset-info">
                          <span className="info-label">
                            <div className="info-label-div">
                              Price-Earnings Ratio
                            </div>
                          </span>
                          <div className="info-data">{asset.peRatio}</div>
                        </div>
                        <div className="asset-info">
                          <span className="info-label">
                            <div className="info-label-div">Dividend Yield</div>
                          </span>
                          <div className="info-data">
                            {!asset.dividendYield ? "—" : asset.dividendYield}
                          </div>
                        </div>
                        <div className="asset-info">
                          <span className="info-label">
                            <div className="info-label-div">Average Volume</div>
                          </span>
                          <div className="info-data capitalize">
                            {numeral(asset.avgTotalVolume).format('0.00a')}
                          </div>
                        </div>
                        {
                          this.state.showMoreClicked ? (
                            <>
                              <div className="asset-info">
                                <span className="info-label">
                                  <div className="info-label-div">High Today</div>
                                </span>
                                <div className="info-data">
                                  {numeral(asset.high).format('$0,0.00')}
                                </div>
                              </div>
                              <div className="asset-info">
                                <span className="info-label">
                                  <div className="info-label-div">Low Today</div>
                                </span>
                                <div className="info-data">
                                  {numeral(asset.low).format('$0,0.00')}
                                </div>
                              </div>
                              <div className="asset-info">
                                <span className="info-label">
                                  <div className="info-label-div">Open Price</div>
                                </span>
                                <div className="info-data">
                                  {numeral(asset.open).format('$0,0.00')}
                                </div>
                              </div>
                              <div className="asset-info">
                                <span className="info-label">
                                  <div className="info-label-div">Volume</div>
                                </span>
                                <div className="info-data capitalize">
                                  {numeral(asset.volume).format('0.00a')}
                                </div>
                              </div>
                              <div className="asset-info">
                                <span className="info-label">
                                  <div className="info-label-div">52 Week High</div>
                                </span>
                                <div className="info-data">
                                  {numeral(asset.week52High).format('$0,0.00')}
                                </div>
                              </div>
                              <div className="asset-info">
                                <span className="info-label">
                                  <div className="info-label-div">52 Week Low</div>
                                </span>
                                <div className="info-data">
                                  {numeral(asset.week52Low).format('$0,0.00')}
                                </div>
                              </div>
                            </>
                          ) : null
                        }
                      </div>
                    </section>
                    <section className="related-lists-section">
                      <header className="related-lists-heading">
                        <div className="related-lists-div">
                          <div className="related-lists-div-inner">
                            <h2 className="related-lists-h2">
                              <span>Related Lists</span>
                            </h2>
                          </div>
                        </div>
                      </header>
                      <div className="list-buttons">
                        <div className="button-one">
                          <span>100 Most Popular</span>
                        </div>
                      </div>
                    </section>
                    <section className="asset-news-section">
                      <header className="asset-news-heading">
                        <div className="asset-news-div">
                          <div className="asset-news-div-inner">
                            <h2 className="asset-news-h2">
                              <span>News</span>
                            </h2>
                          </div>
                        </div>
                      </header>
                      <div>
                        {assetNews.map((article, i) => {
                          return (
                            <a href={article.url} className="article-link"key={i} key={i}>
                              <div className="article">
                                <div className="inner-news-content">
                                  <div className="title-side">
                                    <div className="news-source">
                                      <span>{article.source}</span>
                                      <span className="time-since">{moment(article.datetime).fromNow()}</span>
                                    </div>
                                    <div className="news-title-and-more">
                                      <h3 className="title-h3">
                                        {article.headline}
                                      </h3>
                                      <div>
                                        <span>
                                          {article.summary.slice(0, 59)}...
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="news-image">
                                    <img
                                      src={article.image}
                                      alt="image of news"
                                    />
                                  </div>
                                </div>
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    </section>
                    <section className="rating-section">
                      <header className="rating-heading">
                        <div className="rating-div">
                          <div className="rating-div-inner">
                            <h2 className="rating-h2">
                              <span>Analyst Ratings</span>
                            </h2>
                          </div>
                        </div>
                        <div className="pending-row">
                          <div className="left-rating">
                            <div className="rating-circle"></div>
                          </div>
                          <div className="right-rating"></div>
                        </div>
                      </header>
                      <div className="analyst-ratings-pct">
                          { rating === undefined ? `Ratings currently unavailable for ${ticker}` : <StackedChart 
                            buy={((rating.ratingBuy + rating.ratingOverweight) / (rating.ratingBuy + rating.ratingOverweight + rating.ratingHold + rating.ratingUnderweight + rating.ratingSell))}
                            hold={((rating.ratingHold) / (rating.ratingBuy + rating.ratingOverweight + rating.ratingHold + rating.ratingUnderweight + rating.ratingSell))}
                            sell={((rating.ratingSell + rating.ratingUnderweight) / (rating.ratingBuy + rating.ratingOverweight + rating.ratingHold + rating.ratingUnderweight + rating.ratingSell))}
                          />}
                      </div>
                    </section>
                    <section className="earnings-section">
                      <div className="earnings-heading">
                        <div className="earnings-div">
                          <div className="earnings-div-inner">
                            <h2 className="earnings-h2">
                              <span>Earnings</span>
                            </h2>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section className="history"></section>
                  </div>
                </div>
                <div className="right col-2">
                  <div className="transaction-content">
                    <div className="order-card">
                      <form className="order-form">
                        <div className="order-type">
                          <div className="inner-order-type">
                            <div className="type">
                              <span
                                onClick={this.handleBuyClick}
                                style={{ color: this.state.buyColor }}
                              >
                                Buy {asset.ticker}
                              </span>
                            </div>
                            {stockHoldings ? (
                              <div className="type">
                                <span
                                  onClick={this.handleSellClick}
                                  style={{ color: this.state.sellColor }}
                                >
                                  Sell {asset.ticker}
                                </span>
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <div className="order-amount">
                          <div>
                            <div>
                              <div
                                className="selection"
                                ref={this.wrapperRef_invest}
                              >
                                <label>Invest In</label>
                                <div
                                  className="choice"
                                  onClick={this.showDropdown2}
                                >
                                  <div className="inner-choice">
                                    <div className="combo-box">
                                      <div className="invest-option">
                                        <div className="invest-button">
                                          <div className="text">
                                            <span>
                                              {this.state.investOption}
                                            </span>
                                          </div>
                                          <div className="svg">
                                            <svg
                                              width="27"
                                              height="27"
                                              viewBox="0 0 27 27"
                                            >
                                              <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M9.66675 15.3334L13.0001 19.5L16.3334 15.3334H9.66675Z"
                                              ></path>
                                              <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M9.66675 11.6667L13.0001 7.5L16.3334 11.6667H9.66675Z"
                                              ></path>
                                            </svg>
                                          </div>
                                        </div>
                                      </div>
                                      {this.state.investInDropdown ? (
                                        <div className="invest-outer">
                                          <div
                                            className="shares-option"
                                            onClick={this.updateInvestOption}
                                          >
                                            <span>Shares</span>
                                          </div>
                                          <div
                                            className="dollars-option"
                                            onClick={this.updateInvestOption}
                                          >
                                            <span>Dollars</span>
                                          </div>
                                        </div>
                                      ) : null}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="selection">
                              <label>
                                {this.state.investOption === "Dollars"
                                  ? "Amount"
                                  : "Shares"}
                              </label>
                              <div className="choice">
                                <div className="inner-choice">
                                  <div className="combo-box">
                                    <div className="invest-option-input">
                                      {this.state.investOption === "Dollars" ? (
                                        <input
                                          type="text"
                                          value={this.state.order.quantity || ""}
                                          placeholder="$0.00"
                                          onChange={this.update("Dollars")}
                                        />
                                      ) : (
                                        <input
                                          id="shares-input"
                                          type="text"
                                          value={this.state.order.quantity || ""}
                                          placeholder="0"
                                          onChange={this.update("Shares")}
                                        />
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {this.state.investOption === "Shares" ? (
                              <div className="market-price">
                                <div className="market-price-label">
                                  <span>Market Price</span>
                                </div>
                                <div className="the-price">
                                  <span>${closingPrice.toFixed(2)}</span>
                                </div>
                              </div>
                            ) : null}
                            <div className="est-qt-shares">
                              <div className="est-qt-content">
                                <div className="est-qt-text">
                                  {this.state.buyClicked ? (
                                    <span>
                                      {this.state.investOption === "Dollars"
                                        ? "Est. Quantity"
                                        : "Estimated Cost"}
                                    </span>
                                  ) : (
                                    <span>
                                      {this.state.investOption === "Dollars"
                                        ? "Est. Quantity"
                                        : "Estimated Credit"}
                                    </span>
                                  )}
                                </div>
                                <div className="calculated-qt">
                                  <span>
                                    {this.state.investOption === "Dollars"
                                      ? this.state.estQuantity
                                      : `${numeral(this.state.estCost).format('$0,0.00')}`}
                                  </span>
                                  {/* <span>{this.state.estimate[this.state.investOption]}</span> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="review-message">
                            {this.state.orderMessage || this.state.orderErrorMessage || this.state.successMessage}
                          </div>
                        </div>
                        <div className="review-button-outer">
                          <div className="review-container">
                            <div className="review-button">
                              <button
                                className="review-submit"
                                onClick={this.handleBuy}
                              >
                                {
                                  this.state.reviewOrderClicked ? (
                                    <span>{this.state.orderErrorMessage ? "Edit Order" : "Submit Order"}</span>
                                  ) : (
                                    <span>{this.state.successMessage ? "Confirm" : "Review Order"}</span>
                                  )
                                }
                              </button>
                            </div>
                          </div>
                        </div>
                        <footer className="buying-power-footer">
                          <div className="buying-power-content">
                            {this.state.sellClicked ? (
                              <span>
                                {stockHoldings > 1
                                  ? `${stockHoldings} Shares Available`
                                  : `${stockHoldings} Share Available`}
                              </span>
                            ) : (
                              <span>
                                {numeral(buyingPowerAvailable).format('$0,0.00')} Buying Power Available
                              </span>
                            )}
                          </div>
                        </footer>
                      </form>
                    </div>
                    <div className="for-fun">
                      Max Profit
                    </div>
                    <div className="sidebar-buttons">
                      {button}
                    </div>
                    {/* <Link to={`/`}>Dashboard</Link> */}
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      );
    }
  }
}

export default AssetShow;
