import React from "react";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.sate = this.props.user;
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state);
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
                    <label>
                        <input
                        type="text"
                        value={}
                        placeholder={"Email"}
                        onChange={}
                        />
                    </label>
                    <label>
                        <input
                        type="password"
                        value={}
                        placeholder={"Password"}
                        onChange={}
                        />
                    </label>
                </form>
            </div>
        )
    }
}

export default Login;