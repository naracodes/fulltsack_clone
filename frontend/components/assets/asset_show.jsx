import React from 'react';
import { Link } from 'react-router-dom';
import AssetLineChart from "../charts/linechart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPizzaSlice, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faAngellist, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import AssetNewsIndexContainer from '../assets/asset_news_index_container';
import AssetNewsIndex from './asset_news_index';

class AssetShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddToList = this.handleAddToList.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleRemoveFromList = this.handleRemoveFromList.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.showDropdown  = this.showDropdown.bind(this);
    this.wrapperRef = React.createRef();
    this.state = {
      showDropdown: false,
    }
  }

  handleKeyDown(e) {
    // e.preventDefault();
    return (e) => {
      if (e.keyCode === 13) {
        this.props.history.push(
          `/stocks/${e.currentTarget.value.toUpperCase()}`
        );
      } else {
        return;
      }
    };
  }

  handleLogOut(e) {
    e.preventDefault();
    this.props.logout()
      .then(() => {
        this.props.history.push('/login')
      })
  }

  handleClickOutside(e) {
    if (this.wrapperRef && !this.wrapperRef.current.contains(e.target)) {
      this.setState({
        showDropdown: false,
      })
    }
  }

  componentDidMount() {
    const {
      fetchAsset,
      fetchCompanyInfo,
      fetchIntraday,
      fetchAssetNews,
      fetchRating,
      fetchPortfolioCashBalance
    } = this.props;
    const ticker =
      this.props.asset.ticker || this.props.match.params.ticker.toUpperCase();
    const companyName = this.props.asset.asset_name !== undefined
      ? this.props.asset.asset_name.split(",")[0]
      : "";
    Promise.all([
      fetchCompanyInfo(ticker),
      fetchAsset(ticker),
      fetchIntraday(ticker),
    ]).then((response) => {
      // const companyName = response[1].asset.companyName.split(",")[0];
      fetchAssetNews(ticker);
      fetchPortfolioCashBalance();
      // fetchRating(ticker);
    });
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
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

  showDropdown(e) {
    e.preventDefault();
    this.setState({showDropdown: !this.state.showDropdown})
  }

  render() {
    const { asset, watchlistArr, assetNews, currentUser, rating, portfolio } = this.props;
    const ticker = this.props.match.params.ticker.toUpperCase();
    if (!asset || !watchlistArr) {
      return null;
    } else {
      let button = watchlistArr.includes(ticker) ? (
        <button className="add-button" onClick={this.handleRemoveFromList}>Remove</button>
      ) : (
        <button className="add-button" onClick={this.handleAddToList}>Add</button>
      );
      return (
        <div className="asset-show-outermost">
          <div className="header-bar">
            <div className="header-container">
              <div className="logo-container">
                <Link id="logo" to="/us/en">
                  <FontAwesomeIcon
                    icon={faPizzaSlice}
                    className="pizza-slice"
                  />
                </Link>
              </div>
              <div className="search-outer">
                <div className="search-box">
                  <div className="search-inner-box">
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                    <input
                      type="text"
                      id="search-bar"
                      onKeyDown={this.handleKeyDown}
                      tabIndex="0"
                      placeholder="Search"
                    />
                  </div>
                </div>
              </div>
              <div className="header-right">
                <div className="header-right-box">
                  <div className="linked-in">
                    <FontAwesomeIcon
                      id="linkedin"
                      icon={faLinkedin}
                      className="brand-icon"
                    />
                  </div>
                  <div className="github">
                    <FontAwesomeIcon
                      id="github"
                      icon={faGithub}
                      className="brand-icon"
                    />
                  </div>
                  <div className="angel-list">
                    <FontAwesomeIcon
                      id="angellist"
                      icon={faAngellist}
                      className="brand-icon"
                    />
                  </div>
                  <div className="account" ref={this.wrapperRef}>
                    <span onClick={this.showDropdown}>Account</span>
                    {this.state.showDropdown ? (
                      <div className="dropdown-outer">
                        <div className="dropdown-container">
                          <header>
                            {currentUser ? (
                              <h3>
                                <span>{`${currentUser.firstName} ${currentUser.lastName}`}</span>
                              </h3>
                            ) : (
                              <h3>
                                <span>
                                  Please log in or sign up to continue.
                                </span>
                              </h3>
                            )}
                            <div className="account-details">
                              <div className="portfolio-value">
                                <div className="portfolio-value-container">
                                  <span>
                                    <h3>$0.00</h3>
                                  </span>
                                  <div className="portfolio-value-text">
                                    Portfolio Value
                                  </div>
                                </div>
                              </div>
                              <div className="buying-power-value">
                                <div className="buying-power-value-container">
                                  <span>
                                    <h3>${portfolio.balance}</h3>
                                  </span>
                                  <div className="buying-value-text">
                                    Buying Power
                                  </div>
                                </div>
                              </div>
                            </div>
                          </header>
                          <div
                            className="logout-div-container"
                            onClick={this.handleLogOut}
                          >
                            <div className="logout-div">
                              <span className="logout-svg">
                                <svg
                                  fill="none"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  width="24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    clipRule="evenodd"
                                    d="M19.4444 4.29L4.55844 4.29885C3.7013 4.29885 3 5.07027 3 6.01313V9.43313H4.55844V5.99599L19.4444 5.98714V18.0129L4.55844 18.0217V14.576H3V18.0131C3 18.956 3.7013 19.7103 4.55844 19.7103L19.4444 19.7014C20.3016 19.7014 21.0029 18.9471 21.0029 18.0043V6.00429C21.0029 5.05286 20.3016 4.29 19.4444 4.29ZM12.0116 15.4331L15.4402 12.0046L12.0116 8.57599V11.1474L3 11.1474V12.8617L12.0116 12.8617V15.4331Z"
                                    fill="black"
                                    fillRule="evenodd"
                                  ></path>
                                </svg>
                              </span>
                              <div className="logout-text">Log Out</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="asset-container">
            <main className="main-container">
              <div className="row">
                <div className="left col-1">
                  <header className="stock-name">
                    <h1>{asset.asset_name}</h1>
                  </header>
                  <div>
                    <section className="graph-section">
                      <header className="asset-price">
                        <h1>{asset.close}</h1>
                      </header>
                      <div className="react-chart">
                        <AssetLineChart
                          data={asset.chartData}
                          company={asset.asset_name}
                          closePrice={asset.close}
                          className="stock-graph"
                        />
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
                          <div className="info-data">{asset.employees}</div>
                        </div>
                        <div className="asset-info">
                          <span className="info-label">
                            <div className="info-label-div">Headquarters</div>
                          </span>
                          <div className="info-data">{`${asset.city}, ${asset["state"]}`}</div>
                        </div>
                        <div className="asset-info">
                          <span className="info-label">
                            <div className="info-label-div">Founded</div>
                          </span>
                          <div className="info-data">????</div>
                        </div>
                        <div className="asset-info">
                          <span className="info-label">
                            <div className="info-label-div">Market Cap</div>
                          </span>
                          <div className="info-data">{asset.marketCap}</div>
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
                          <div className="info-data">
                            {asset.avgTotalVolume}
                          </div>
                        </div>
                        <div className="asset-info">
                          <span className="info-label">
                            <div className="info-label-div"></div>
                          </span>
                          <div className="info-data"></div>
                        </div>
                        <div className="asset-info">
                          <span className="info-label">
                            <div className="info-label-div"></div>
                          </span>
                          <div className="info-data"></div>
                        </div>
                        <div className="asset-info">
                          <span className="info-label">
                            <div className="info-label-div"></div>
                          </span>
                          <div className="info-data"></div>
                        </div>
                        <div className="asset-info">
                          <span className="info-label">
                            <div className="info-label-div"></div>
                          </span>
                          <div className="info-data"></div>
                        </div>
                        <div className="asset-info">
                          <span className="info-label">
                            <div className="info-label-div"></div>
                          </span>
                          <div className="info-data"></div>
                        </div>
                        <div className="asset-info">
                          <span className="info-label">
                            <div className="info-label-div"></div>
                          </span>
                          <div className="info-data"></div>
                        </div>
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
                        {
                          assetNews.map((article, i) => {
                            return (
                              <div key={i} className="article">
                                <div className="inner-news-content">
                                  <div className="title-side">
                                    <div className="news-source">
                                      <span>{article.source}</span>
                                        <span className="time-since">xh</span>
                                    </div>
                                    <div className="news-title-and-more">
                                      <h3 className="title-h3">
                                        {article.headline}
                                      </h3>
                                      <div>
                                        <span>{article.summary.slice(0, 59)}...</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="news-image">
                                    <img
                                      src="https://images.robinhood.com/WYBvSMKXdd8z6EYOysmzlW72gWw/aHR0cHM6Ly9pbWFnZXMucm9iaW5ob29kLmNvbS9IeHBzNlktdDZyV3pWaTk4SEs3OTU3alllQm8vYUhSMGNITTZMeTl6TG5scGJXY3VZMjl0TDNWMUwyRndhUzl5WlhNdk1TNHlMM3BwWDJkUE1HUjNMblJFUjBsTVNHcDNURVl1UVhjdExYNUNMMkZFTURGT1JHYzNaSG93TkUxRVFUZGpNakE1VFZSMGFHTklRbkJhUkRFMVpFZEdhbUZJYkhaaVp5MHRMMmgwZEhCek9pOHZiV1ZrYVdFdWVtVnVabk11WTI5dEwyVnVMVlZUTDNKbGRYUmxjbk10Wm1sdVlXNWpaUzVqYjIwdllUYzNOR1F6TWpVeE56Wm1ZbVJtTW1NeE5XTXhNV0ZrTWpZNE1UTTNaR0U"
                                      alt="image of news"
                                    />
                                  </div>
                                </div>
                              </div>
                            );
                          })
                        }
                      </div>
                    </section>
                    <section className="rating-section">
                      <div className="rating-heading">
                        <div className="rating-div">
                          <div className="rating-div-inner">
                            <h2 className="rating-h2">
                              <span>Analyst Ratings</span>
                            </h2>
                          </div>
                        </div>
                        <div className="pending-row">
                          <div className="left-rating">
                            <div className="rating-circle">
                            </div>
                          </div>
                          <div className="right-rating">
                          </div>
                        </div>
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
                              <span>Buy {asset.ticker}</span>
                            </div>
                          </div>
                        </div>
                        <div className="order-amount">
                          <div>
                            <div>
                              <div className="selection">
                                <label>Invest In</label>
                                <div className="choice">
                                  <div className="inner-choice">
                                    <div className="combo-box">
                                      <div className="invest-option">
                                        <button className="invest-button">
                                          <div className="text">
                                            <span>Dollars</span>
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
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="selection">
                              <label>Amount</label>
                              <div className="choice">
                                <div className="inner-choice">
                                  <div className="combo-box">
                                    <div className="invest-option-input">
                                      <input type="text" placeholder="$0.00" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="est-qt-shares">
                              <div className="est-qt-content">
                                <div className="est-qt-text">
                                  <span>Est. Quantity</span>
                                </div>
                                <div className="calculated-qt">
                                  <span>num</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="review-button-outer">
                          <div className="review-container">
                            <div className="review-button">
                              <button className="review-submit">
                                <span>Review Order</span>
                              </button>
                            </div>
                          </div>
                        </div>
                        <footer className="buying-power-footer">
                          <div className="buying-power-content">
                            <span>${portfolio.balance} Buying Power Available</span>
                          </div>
                        </footer>
                      </form>
                    </div>
                    <div className="sidebar-buttons">
                      <button className="add-button options">
                        Options - coming soon!
                      </button>
                      {button}
                    </div>
                    <Link to={`/`}>Dashboard</Link>
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

