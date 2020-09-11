import React from 'react';
import { Link } from 'react-router-dom';
import LoginContainer from '../session/login_container';
import WatchlistIndexContainer from '../watchlist/watchlist_index_container';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPizzaSlice, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faAngellist, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown(this);
  }

  handleDropdown() {

  }

  handleClick(e) {
    e.preventDefault();
    // debugger
    this.props.logout()
  }

  handleKeyDown(e) {
    // e.preventDefault();
    return e => {
      if (e.keyCode === 13) {
        this.props.history.push(
          `/stocks/${e.currentTarget.value.toUpperCase()}`
        );
      } else {
        return;
      }
    };
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
                  <FontAwesomeIcon id="github" icon={faGithub} className="brand-icon" />
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

            {/* <div className="dropdown-trigger">
                      <h4 className="dropdown-btn">Account</h4>
                      <ul className="dropdown-list">
                        <li>
                          {currentUser.firstName} {currentUser.lastName}
                        </li>
                        <li>
                          <button onClick={this.handleClick}>Log Out</button>
                        </li>
                      </ul>
                    </div> */}
          </div>
        </div>
        <div className="dashboard-container">
          <main className="main-container">
            <div className="row">
              <div className="left col-1">
                <section className="portfolio-graph">GRAPH</section>
                <section className="pop-collection"></section>
                <section className="news-stand"></section>
              </div>
              <div className="right col-2">
                <WatchlistIndexContainer />
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Dashboard;