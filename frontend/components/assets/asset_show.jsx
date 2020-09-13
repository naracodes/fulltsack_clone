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
    this.handleRemoveFromList = this.handleRemoveFromList.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
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

  componentDidMount() {
    const {
      fetchAsset,
      fetchCompanyInfo,
      fetchIntraday,
      fetchAssetNews,
    } = this.props;
    const ticker =
      this.props.asset.ticker || this.props.match.params.ticker.toUpperCase();
    const companyName = this.props.asset.asset_name
      ? this.props.asset.asset_name.split(",")[0]
      : "";
    Promise.all([
      fetchCompanyInfo(ticker),
      fetchAsset(ticker),
      fetchIntraday(ticker),
    ]).then((response) => {
      const companyName = response[1].asset.companyName.split(",")[0];
      fetchAssetNews(companyName);
    });
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
    const { asset, watchlistArr, assetNews } = this.props;
    const ticker = this.props.match.params.ticker.toUpperCase();
    if (!asset || !watchlistArr) {
      return null;
    } else {
      // let shortDescription = asset.description ? asset.description.slice(0, 245) : "";
      // let restOfDescription = asset.description ? asset.description.slice(245) : "";
      // let companyName = asset ? asset.asset_name.split(",")[0] : "";
      let button = watchlistArr.includes(ticker) ? (
        <button onClick={this.handleRemoveFromList}>Remove</button>
      ) : (
        <button onClick={this.handleAddToList}>Add</button>
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
                  <div className="account">
                    <span>Account</span>
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
                          <h2><span>About</span></h2>
                        </div>
                      </header>
                      <div className="company-description">
                        <h3><span>{asset.description}</span></h3>
                      </div>
                      <div className="info-grid">
                        <div className="asset-info">
                          <span className="info-label">
                            <div className="info-label-div">

                            </div>
                          </span>
                          <div className="info-data">
                            
                          </div>
                        </div>
                        <div className="asset-info">
                          <span className="info-label">
                            <div className="info-label-div">

                            </div>
                          </span>
                          <div className="info-data">
                            
                          </div>
                        </div>
                        <div className="asset-info">
                          <span className="info-label">
                            <div className="info-label-div">

                            </div>
                          </span>
                          <div className="info-data">
                            
                          </div>
                        </div>
                        <div className="asset-info">
                          <span className="info-label">
                            <div className="info-label-div">

                            </div>
                          </span>
                          <div className="info-data">
                            
                          </div>
                        </div>
                        <div className="asset-info">
                          <span className="info-label">
                            <div className="info-label-div">

                            </div>
                          </span>
                          <div className="info-data">
                            
                          </div>
                        </div>
                        <div className="asset-info">
                          <span className="info-label">
                            <div className="info-label-div">

                            </div>
                          </span>
                          <div className="info-data">
                            
                          </div>
                        </div>
                        <div className="asset-info">
                          <span className="info-label">
                            <div className="info-label-div">

                            </div>
                          </span>
                          <div className="info-data">
                            
                          </div>
                        </div>
                        <div className="asset-info">
                          <span className="info-label">
                            <div className="info-label-div">

                            </div>
                          </span>
                          <div className="info-data">
                            
                          </div>
                        </div>
                        <div className="asset-info">
                          <span className="info-label">
                            <div className="info-label-div">

                            </div>
                          </span>
                          <div className="info-data">
                            
                          </div>
                        </div>
                        <div className="asset-info">
                          <span className="info-label">
                            <div className="info-label-div">

                            </div>
                          </span>
                          <div className="info-data">
                            
                          </div>
                        </div>
                        <div className="asset-info">
                          <span className="info-label">
                            <div className="info-label-div">

                            </div>
                          </span>
                          <div className="info-data">
                            
                          </div>
                        </div>
                        <div className="asset-info">
                          <span className="info-label">
                            <div className="info-label-div">

                            </div>
                          </span>
                          <div className="info-data">
                            
                          </div>
                        </div>
                        <div className="asset-info">
                          <span className="info-label">
                            <div className="info-label-div">

                            </div>
                          </span>
                          <div className="info-data">
                            
                          </div>
                        </div>
                        <div className="asset-info">
                          <span className="info-label">
                            <div className="info-label-div">

                            </div>
                          </span>
                          <div className="info-data">
                            
                          </div>
                        </div>
                      </div>
                    </section>
                    <section className="related-lists">

                    </section>
                    <section className="asset-news">

                    </section>
                    <section className="analyst-ratings">

                    </section>
                    <section className="earnings">

                    </section>
                    <section className="history">

                    </section>
                    <div className="about">
                      <label className="ceo">
                        CEO
                        <div>{asset["CEO"]}</div>
                      </label>
                      <label className="employees">
                        Employees
                        <div>{asset.employees}</div>
                      </label>
                      <label className="hq">
                        Headquarters
                        <div>
                          {asset.city}, {asset["state"]}
                        </div>
                      </label>
                      <label className="founded">
                        Founded
                        <div>????</div>
                      </label>
                      <label className="market-cap">
                        Market Cap
                        <div>{asset.marketCap}</div>
                      </label>
                      <label className="pe-ratio">
                        Price-Earning Ratio
                        <div>{asset.peRatio}</div>
                      </label>
                      <label className="dividend">
                        Dividend Yield
                        <div>
                          {!asset.dividendYield ? "-" : asset.dividendYield}
                        </div>
                      </label>
                      <label className="avg-vol">
                        Average Volume
                        <div>{asset.avgTotalVolume}</div>
                      </label>
                    </div>

                    <div className="collections">Collections placeholder</div>

                    {/* <AssetNewsIndexContainer className="asset-news-stand" companyName={asset.asset_name} /> */}
                    {/* <AssetNewsIndexContainer companyName={asset.asset_name} /> */}
                    {/* <AssetNewsIndex companyName={asset.asset_name} news={assetNews} /> */}

                    <div className="analyst-ratings">
                      Analyst ratings placeholder
                    </div>

                    <div className="earnings">earnings placeholder</div>
                  </div>
                </div>
                <div className="right col-2">
                  <div className="transaction-content">
                    <div className="order-container">
                      
                    </div>
                    Buy/Sell
                    {button}
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

