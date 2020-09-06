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
                        <div className="login-container">
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
                                        <div className='demo-login'>
                                            <p onClick={this.handleDemo}>Demo user</p> 
                                        </div>
                                        
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Login;