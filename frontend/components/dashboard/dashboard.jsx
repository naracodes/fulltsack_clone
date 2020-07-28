import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../nav_bar/nav_bar'

class Dashboard extends React.Component {

    render() {
        const { currentUser, logout } = this.props;
        // debugger;
        const dashboard = currentUser ? (
        <div>
            Welcome, {`${currentUser.firstName} ${currentUser.lastName}`}
        </div>
         ) : (<NavBar />)
         return (
             <div>
                 {dashboard}
             </div>
         )
    }
}

export default Dashboard;