import React from 'react';
import { Link } from 'react-router-dom';
import AssetLineChart from "../charts/linechart";
import WatchlistIndexContainer from '../watchlist/watchlist_index_container';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPizzaSlice, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faAngellist, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.showDropdown = this.showDropdown.bind(this);
    this.wrapperRef = React.createRef();
    this.state = {
      showDropdown: false,
    };
  }

  handleLogOut(e) {
    debugger;
    e.preventDefault();
    this.props.logout().then(() => {
      debugger;
      this.props.history.push("/login");
    });
  }

  handleClickOutside(e) {
    if (this.wrapperRef && !this.wrapperRef.current.contains(e.target)) {
      this.setState({
        showDropdown: false,
      });
    }
  }

  handleClick(e) {
    e.preventDefault();
    // debugger
    this.props.logout();
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
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  showDropdown(e) {
    e.preventDefault();
    this.setState({ showDropdown: !this.state.showDropdown });
  }

  render() {
    const { currentUser, logout } = this.props;
    // debugger;
    return (
      <div className="dashboard-outermost">
        <div className="header-bar">
          <div className="header-container">
            <div className="logo-container">
              <Link id="logo" to="/us/en">
                <FontAwesomeIcon icon={faPizzaSlice} className="pizza-slice" />
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
                              <span>Please log in or sign up to continue.</span>
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
                                  <h3>$0.00</h3>
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
        <div className="dashboard-container">
          <main className="main-container">
            <div className="row">
              <div className="left col-1">
                <section className="graph-section">
                  <header className="asset-price">
                    <h1>Portfolio Graph</h1>
                  </header>
                  <div className="react-chart"></div>
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
                      <span>$0.00</span>
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

export default Dashboard;