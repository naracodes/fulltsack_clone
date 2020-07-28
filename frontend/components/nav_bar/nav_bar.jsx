import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    
    render() {
        const { currentUser, logout } = this.props;
        return (
            <div>
                <h3>This is navbar</h3>
                <Link to={'/signup'}>Sign Up</Link>
            </div>
        )
    }
}

export default NavBar;