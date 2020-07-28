import React from "react";

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.user;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createNewUser(this.state);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    render() {
        return (
        <div>
            <h2>{this.props.formType}</h2>
            <form>
                <label>
                    <input
                    type="text"
                    // value={"First Name"}
                    placeholder={"First Name"}
                    onChange={this.update('firstName')}
                    />
                </label>
                <label>
                    <input
                    type="text"
                    // value={"Last Name"}
                    placeholder={"Last Name"}
                    onChange={this.update('lastName')}
                    />
                </label>
                <label>
                    <input
                    type="text"
                    // value={"Email"}
                    placeholder={"Email"}
                    onChange={this.update('email')}
                    />
                </label>
                <label>
                    <input
                    type="password"
                    // value={"Password (min. 10 characters)"}
                    placeholder={"Password (min. 10 characters)"}
                    onChange={this.update('password')}
                    />
                </label>
                <button onClick={this.handleSubmit}>Continue</button>
            </form>
        </div>
        )
    }

}

export default Signup;