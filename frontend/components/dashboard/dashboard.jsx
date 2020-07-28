import React from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {

    render() {
        const { currentUser, logout } = this.props;
        <div>
            Welcome, {`${currentUser.firstName} ${currentUser.lastName}`}
        </div>
    }
}

export default Dashboard;