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
                <Link to={'/signup'}>Sign Up</Link>
            </div>
        )
        return (
            <header className="nav-bar">
                <h3>Robinhood</h3>
            <div>
                {navBar}
            </div>
            </header>
        )
    }
}

export default NavBar;