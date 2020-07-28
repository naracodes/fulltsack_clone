import React from "react";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.currentUser;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        debugger;
        this.props.login(this.state)
            .then(() => this.props.history.push('/dashboard'));
        //.then(redirect to dashboard)
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }
    
    render() {
        return (
            <div>
                <form>
                    <label>Email or username
                        <br/>
                        <input
                        type="text"
                        value={this.state.email}
                        placeholder={"Email"}
                        onChange={this.update('email')}
                        />
                    </label>
                    <br/>
                    <label>Password
                        <br/>
                        <input
                        type="password"
                        value={this.state.password}
                        placeholder={"Password"}
                        onChange={this.update('password')}
                        />
                    </label>
                    <button onClick={this.handleSubmit}>Sign In</button>
                </form>
            </div>
        )
    }
}

export default Login;