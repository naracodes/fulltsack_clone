import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        // debugger
        this.props.logout()
            .then(() => this.props.history.push('/login'))
    }

    render() {
        const { currentUser, logout } = this.props;
        const navBar = currentUser ? ( <button onClick={this.handleClick}>Log Out</button> ) : (
            <div className="user-entry">
                <Link to={'/login'}>Log In</Link>
                <Link id='sign-up' to={'/signup'}>Sign Up</Link>
            </div>
        )
        return (
            <nav className="nav-bar">
                <div>Robinhood</div>
                <div>{navBar}</div>
            </nav>
        )
    }
}

export default NavBar;