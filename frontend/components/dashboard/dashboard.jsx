import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../nav_bar/nav_bar'
import LoginContainer from '../session/login_container';
import WatchlistIndexContainer from '../watchlist/watchlist_index_container';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown(this);
  }

  handleClick(e) {
    e.preventDefault();
    // debugger
    this.props.logout()
    }

  handleKeyDown(e) {
    return e => {
      if (e.keyCode === 13) {
        this.props.history.push(`/dashboard/${e.currentTarget.value.toUpperCase()}`);
      } else {
        return;
      }
    }
  }

  render() {
    const { currentUser, logout } = this.props;
    // debugger;
    const dashboard = currentUser ? (
      <div className="dashboard-body">
        <div className="dashboard-grid">
              <div className="portfolio-graph"></div>
              <div className="pop-collection"></div>
              <div className="news-stand"></div>
              <WatchlistIndexContainer />
        </div>
      </div>
    ) : (
        <div>
            <LoginContainer />
        </div>
    );
    return dashboard;
  }
}

export default Dashboard;