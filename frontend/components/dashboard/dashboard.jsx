import React from 'react';
import { Link } from 'react-router-dom';
import AssetLineChart from "../charts/linechart";
import WatchlistIndexContainer from '../watchlist/watchlist_index_container';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPizzaSlice, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faAngellist, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import PortfoLineChart from '../charts/portfo_chart';
import NavBar from '../nav_bar/nav_bar';
import { fetchHoldings } from '../../actions/holding_action';
import numeral from 'numeral';
import moment from 'moment';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
    // this.handleKeyDown = this.handleKeyDown(this);
    // this.handleLogOut = this.handleLogOut.bind(this);
    // this.handleClickOutside = this.handleClickOutside.bind(this);
    // this.showDropdown = this.showDropdown.bind(this);
    // this.wrapperRef = React.createRef();
    this.state = {
      loading: true,
      showDropdown: false,
      mergedData: "",
    };
    // this.mergeData = this.mergeData.bind(this);
  }

  handleLogOut(e) {
    e.preventDefault();
    this.props.logout().then(() => {
      this.props.history.push("/login");
    });
  }

  // handleClickOutside(e) {
  //   if (this.wrapperRef && !this.wrapperRef.current.contains(e.target)) {
  //     this.setState({
  //       showDropdown: false,
  //     });
  //   }
  // }

  // handleClick(e) {
  //   e.preventDefault();
  //   this.props.logout();
  // }

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

  // mergeData(userDataArr, stockData, hold) {
  //   userDataArr.forEach((data, i) => {
  //     Object.keys(stockData).forEach(ticker => {
  //       if (!stockData[ticker]["intraday-prices"][i].close) {
  //         stockData[ticker]["intraday-prices"][i].close = stockData[ticker]["intraday-prices"][i  -1].close;
  //       }
  //       userDataArr[i].cash_balance += stockData[ticker]["intraday-prices"][i] ? stockData[ticker]["intraday-prices"][i].close * hold[ticker] : (userDataArr[i].cash_balance * -1);
  //     });
  //   });
  //   console.log(userDataArr);
  //   return userDataArr;
  // }

  componentDidMount() {
    const { fetchAssets, fetchPortfoData, fetchPortfolioCashBalance, fetchMultipleIntraday, fetchHoldings, fetchAssetNews } = this.props;
    // const tickers = Object.keys(this.props.portfolio.holdings);
    Promise.all([
      fetchHoldings(),
      fetchPortfolioCashBalance(),
      // fetchPortfoData(),
      fetchAssetNews("GOOGL"),
    ]).then(res => {
      // console.log(Object.keys(res[0].holdings.holdings));
      // console.log(Object.keys(res[0].holdings.holdings).filter((ticker) => res[0].holdings.holdings[ticker] > 0));
      // const tickers = Object.keys(res[0].holdings.holdings).filter(
      //   (ticker) => res[0].holdings.holdings[ticker] > 0
      // )
      // if (tickers.length) {
      //   fetchMultipleIntraday(tickers)
      //   .then(multIntra => {
      //     // console.log(res[2].data.data)
      //     console.log(multIntra.multIntraday)
      //     console.log(res[0].holdings.holdings)
      //     let userData = res[2].data.data;
      //     let stockData = multIntra.multIntraday;
      //     let holdings = res[0].holdings.holdings;
      //     // console.log(this.mergeData(userData, stockData))
      //     let newData = this.mergeData(userData, stockData, res[0].holdings.holdings)
      //     this.setState({
      //       mergedData: newData,
      //       loading: false,
      //     }, () => console.log(newData));
      //   })
      // } else {
      //   this.setState({
      //     mergedData: this.props.portfoData,
      //     loading: false,
      //   });
      // }
    })
    // document.addEventListener("mousedown", this.handleClickOutside);

  }

  componentWillUnmount() {
    // document.removeEventListener("mousedown", this.handleClickOutside);
  }

  // showDropdown(e) {
  //   e.preventDefault();
  //   this.setState({ showDropdown: !this.state.showDropdown });
  // }

  render() {
    const { currentUser, logout, portfolio, assetNews, portfoData, multIntraday } = this.props;
    const { mergedData } = this.state;
    // const notAllFetched = !currentUser || !portfolio || !assetNews || !portfoData || !multIntraday;
    const notAllFetched = !currentUser || !portfolio || !assetNews || !portfoData || !multIntraday;
    if (!this.state) {
      return (
        <div>
          Loading...
        </div>
      )
    } else {
      // let buyingPowerAvailable = portfolio.balance.toFixed(2);
      // let portfoValue = mergedData[mergedData.length - 1].cash_balance.toFixed(2)
      // window.localStorage.setItem("portfoVal", (portfoValue));
      return (
        <div className="dashboard-outermost">
          <NavBar 
            currentUser={currentUser}
            // mergedData={mergedData}
            // buyingPowerAvailable={buyingPowerAvailable}
            history={this.props.history}
            logout={this.props.logout}
            // portfoValue={portfoValue}
            />
          <div className="dashboard-container">
            <main className="main-container">
              <div className="row">
                <div className="left col-1">
                  <section className="graph-section">
                    <header className="asset-price">
                    </header>
                    <div className="react-chart">
                      {/* <PortfoLineChart
                        data={mergedData}
                        className="stock-graph"
                      /> */}
                    </div>
                    <nav className="range">
                      <div className="range-buttons">
                        <div className="1D">
                          <span>1D</span>
                        </div>
                        <div className="1W">
                          <span>1W</span>
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
                          <span>ALL</span>
                        </div>
                      </div>
                    </nav>
                  </section>
                  <div className="dashboard-buying-p">
                    <header className="buying-p-heading">
                      <div>
                        <span>Buying Power</span>
                        <span>
                          {/* {numeral(buyingPowerAvailable).format("$0,0.00")} */}
                        </span>
                      </div>
                    </header>
                  </div>
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
                          <a href={article.url} className="article-link" key={i}>
                            <div key={i} className="article">
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
                </div>
                <div className="right col-2">
                  <div className="watchlist-content">
                    <div className="watchlist-card">
                      <div className="actual-sidebar">
                        <WatchlistIndexContainer />
                      </div>
                    </div>
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

export default Dashboard;