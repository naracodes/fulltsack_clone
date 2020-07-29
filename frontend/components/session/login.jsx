import React from "react";
import Signup from "./signup";
import { Link } from "react-router-dom";


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.currentUser;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        // debugger;
        this.props.login(this.state)
            .then(() => this.props.history.push('/dashboard'));
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }
    
    render() {
        return (
            <div className="login-container">
            <div className="login-form">
                <h3 id="welcome">Welcome to Robinhood</h3>
                <form className='login-subform'>
                    <label id="guide">Email or username
                        <br/>
                        <input
                        type="text"
                        value={this.state.email}
                        onChange={this.update('email')}
                        />
                    </label>
                    <br/>
                    <label id="guide">Password
                        <br/>
                        <input
                        type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        />
                    </label>
                    <br/>
                    <div className="signin-signup">
                        <button className={'sign-in-button'} onClick={this.handleSubmit}>Sign In</button>
                        <p className='message'>Not registered?
                        <Link id='or-signup' to={'/signup'}>Create an account</Link>
                        </p>
                    </div>
                </form>
            </div>
            </div>
        )
    }
}

export default Login;