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
    this.state = {
      loading: true,
      showDropdown: false,
      mergedData: "",
      historicalBatch: "",
      historicalPortfo: null,
      intraday: null,
      clickedRange: "",
    };
    this.mergeData = this.mergeData.bind(this);
    this.handleRangeClick = this.handleRangeClick.bind(this);
  }

  handleLogOut(e) {
    e.preventDefault();
    this.props.logout().then(() => {
      this.props.history.push("/login");
    });
  }

  mergeData(range, portfoDataPoints, stockData) {
    const { multIntraday, tickers, portfoData } = this.props;
    const { mergedData, historicalBatch, historicalPortfo } = this.state;

    const ownedStocks = Object.keys(tickers);
    const ownedIntraday = {};
    ownedStocks.forEach(ticker => {
      ownedIntraday[ticker] = multIntraday.multiple[ticker]["intraday-prices"];
    });

    if (range === "1D") {
      for (let i = 0; i < 78; i++) {
        let j = ownedIntraday[0].length - portfoData[range] + i;
        historicalPortfo.map(obj => {
        })
      }
    }
  }

  handleRangeClick(e) {
    const { fetchHistoricalBatch, tickers } = this.props;
    const { historicalBatch } = this.state;
    const tickersArr = Object.keys(tickers);
    if (range === "1W") range = "5DM";
    let range = e.target.textContent;
    debugger
    if (!historicalBatch[range]) {
      debugger
      fetchHistoricalBatch(tickersArr, range).then(res => {
        console.log(res);
        this.setState({
          historicalBatch: {[range]: res.historicalBatchPrices }
        }, () => console.log(this.state));
      })
    }
  }

  componentDidMount() {
    const { portfolio, holdings, fetchAssets, fetchPortfoData, fetchPortfolioCashBalance, fetchMultipleIntraday, fetchHoldings, fetchAssetNews, portfoData, multIntraday } = this.props;
    // const tickers = Object.keys(this.props.portfolio.holdings);
    Promise.all([
      fetchPortfoData(""),
      fetchHoldings(),
      fetchPortfolioCashBalance(),
      fetchAssetNews("GOOGL"),
    ])
    .then(res => {
      console.log(res)
      debugger
      this.setState({
        historicalPortfo: res[0].data.data
      }, () => console.log(this.state));
    })
  }

  render() {
    const { currentUser, logout, portfolio, assetNews, portfoData, multIntraday, holdings } = this.props;
    // const { mergedData } = this.state;
    // const notAllFetched = !currentUser || !portfolio || !assetNews || !portfoData || !multIntraday;
    const notAllFetched = !currentUser || !portfolio || !assetNews;
    if (!currentUser || !portfolio.balance || !assetNews || !portfoData) {
      return (
        <div>
          Loading...
        </div>
      )
    } else {
      debugger
      let buyingPowerAvailable = portfolio.balance.toFixed(2);
      // let portfoValue = mergedData[mergedData.length - 1].cash_balance.toFixed(2)
      // window.localStorage.setItem("portfoVal", (portfoValue));
      return (
        <div className="dashboard-outermost">
          <NavBar 
            currentUser={currentUser}
            // mergedData={mergedData}
            buyingPowerAvailable={buyingPowerAvailable}
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
                      <PortfoLineChart
                        data={this.state.historicalPortfo}
                        className="stock-graph"
                      />
                    </div>
                    <nav className="range">
                      <div className="range-buttons">
                        <div className="1D">
                          <span>1D</span>
                        </div>
                        <div className="1W">
                          <span onClick={this.handleRangeClick}>1W</span>
                        </div>
                        <div className="1M">
                          <span onClick={this.handleRangeClick}>1M</span>
                        </div>
                        <div className="3M">
                          <span onClick={this.handleRangeClick}>3M</span>
                        </div>
                        <div className="1Y">
                          <span onClick={this.handleRangeClick}>1Y</span>
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
                          {numeral(buyingPowerAvailable).format("$0,0.00")}
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