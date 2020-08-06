import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../nav_bar/nav_bar'
import LoginContainer from '../session/login_container';
import AssetIndexContainer from '../assets/asset_index_container'
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
    const dashboard = currentUser ? (
      <div>
        <ul>
          <li>Welcome, {`${currentUser.firstName} ${currentUser.lastName}`}</li>
          <div>
            <AssetIndexContainer />
          </div>
        </ul>

        <br/>
          <div>
              <WatchlistIndexContainer />
          </div>
          <div>
        </div>
      </div>
    ) : (
        <div>
            <LoginContainer />
        </div>
    );
    return <div className="dashboard-container">{dashboard}</div>;
  }
}

export default Dashboard;