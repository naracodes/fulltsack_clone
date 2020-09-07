import React from "react";
import Signup from "./signup";
import { Link } from "react-router-dom";


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.currentUser;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    handleSubmit(e) {
        // debugger
        e.preventDefault();
        // debugger;
        this.props.login(this.state)
            .then(() => {
                // debugger
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

    handleDemo(e) {
        e.preventDefault();
        const demoUser = {
                email: 'demo@demo.com',
                password: 'demopassworddemo',
            };
            
        this.props.login(demoUser)
            .then(() => {
          this.props.history.push("/dashboard");
        });
    }
    
    render() {
        return (
            <div className="login-outermost">
                <div className="login-outermost-2">
                    <div className="login-outermost-3">
                        <div className="left-image">
                        </div>
                        <div>
                            <div className="login-container">
                                <div>
                                    <form className='login-form'>
                                        <header className="login-header">
                                            <span className="login-span">Welcome to Quiche</span>
                                        </header>
                                        <div className="login-input">
                                            <div>
                                                <div className="email-field">                                                    
                                                    <label id="login-label">
                                                        <div>Email or username</div>
                                                        <div>
                                                            <input
                                                            className="input-box"
                                                            type="text"
                                                            value={this.state.email}
                                                            onChange={this.update('email')}
                                                            />
                                                        </div>
                                                    </label>
                                                </div>
                                                <div className="password-field">
                                                    <label id="login-label">
                                                        <div>Password</div>
                                                        <div>
                                                            <input
                                                            className="input-box"
                                                            type="password"
                                                            value={this.state.password}
                                                            onChange={this.update('password')}
                                                            />
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                            <p>
                                                Not registered? <Link id="signup-link" to={'/signup'}>Create an account</Link>
                                            </p>
                                            <div className='error-message'>
                                                {this.renderErrors()}
                                            </div>
                                        </div>
                                        <footer className="signin-button">
                                            <div className="the-button">
                                                <button className="the-actual-button" onClick={this.handleSubmit}>
                                                    <span>Sign In</span>
                                                </button>
                                                <p onClick={this.handleDemo}>Demo user</p>
                                            </div>
                                        </footer>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Login;