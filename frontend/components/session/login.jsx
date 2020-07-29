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
        debugger
        e.preventDefault();
        debugger;
        this.props.login(this.state)
            .then(() => {
                this.props.history.push('/dashboard');
            })
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    renderErrors() {
        return (
            <div>
                {
                this.props.errors.map((error, i) => {
                    return (
                        <p key={i}>&#10083; {error}</p>
                    )
                }) 
                }
            </div>
        )
    }
    
    render() {
        return (
            <div className="login-container">
                <Link className='home-btn' to={'/'}>Quiche</Link>
                <div className="login-form">
                    <h3 id="welcome">Welcome to Quiche</h3>
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
                        <div className='error-message'>
                            {this.renderErrors()}
                        </div>
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