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
            .then(() => {
                this.props.history.push('/login')
            })
    }

    render() {
        // debugger
        const { currentUser, logout } = this.props;
        const { history } = this.props.history;

        let navBar;
        if (currentUser) {
           navBar = (<button onClick={this.handleClick}>Log Out</button>);
        } else if (this.props.history.location.pathname === '/signup' || this.props.history.location.pathname === '/login' || this.props.history.location.pathname === '/dashboard') {
            navBar = null;
        } else {
            navBar = (
                <nav className="nav-bar">
                    <div className='container'>
                        <div className='logo'>
                            <Link to={'/'}>Quiche (Logo)</Link>
                        </div>
                        <div className="user-entry">
                            <ul className='navLinks'>
                                <li><Link to={'/login'}>Log In</Link></li>
                                <li><Link id='sign-up' to={'/signup'}>Sign Up</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            )
        }
        return (
            
                <div>
                { navBar }
                </div>
            
        )
    }
}

export default NavBar;

// return (
//     <nav className="nav-bar">
//         <div className='container'>
//             <div className='logo'>
//                 <Link to={'/'}>Quiche (Logo)</Link>
//             </div>
//             {navBar}
//         </div>
//     </nav>
// )