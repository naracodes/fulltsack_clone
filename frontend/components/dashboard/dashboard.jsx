import React from 'react';
import { Link } from 'react-router-dom';
import LoginContainer from '../session/login_container';
import WatchlistIndexContainer from '../watchlist/watchlist_index_container';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    
  }

  handleClick(e) {
    e.preventDefault();
    // debugger
    this.props.logout()
  }

  render() {
    const { currentUser, logout } = this.props;
    // debugger;
    return (
      <div className="dashboard-body">
          <div className="header-bar">
              <div className="search-outer">
                <form className="search-container">
                  <input
                    type="text"
                    id="search-bar"
                    onKeyDown={this.handleKeyDown}
                    tabIndex="0"
                  />
                  <img
                    className="search-icon"
                    src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"
                  />
                </form>
              </div>
              <div className="dropdown-trigger">
                <h4 className="dropdown-btn">Account</h4>
                <ul className="dropdown-list">
                  <li>
                    {currentUser.firstName} {currentUser.lastName}
                  </li>
                  <li>
                    <button onClick={this.handleClick}>Log Out</button>
                  </li>
                </ul>
              </div>
          </div>
          <div className="dashboard-grid">
                
              <div className="portfolio-graph"></div>
              <div className="pop-collection"></div>
              <div className="news-stand"></div>
              <WatchlistIndexContainer />
          </div>
      </div>
    )
  }
}

export default Dashboard;