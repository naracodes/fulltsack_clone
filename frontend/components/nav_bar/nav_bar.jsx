import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    
    render() {
        const { currentUser, logout } = this.props;
        const navBar = currentUser ? ( <button onClick={logout}>Log Out</button> ) : (
            <div>
                <h5>This is navbar</h5>
                <Link to={'/login'}>Log In</Link>
                <Link to={'/signup'}>Sign Up</Link>
            </div>
        )
        return (
            <div>
                {navBar}
            </div>
        )
    }
}

export default NavBar;