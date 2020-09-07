import React from "react";
import { Link } from "react-router-dom";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentUser;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    // debugger;
    e.preventDefault();
    // debugger;
    this.props.createNewUser(this.state).then(() => {
      // debugger;
      this.props.history.push("/dashboard");
    });
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  renderErrors() {
    return (
      <div className='signup-error-message'>
        {this.props.errors.map((error, i) => {
          return <p key={i}>&#10083; {error}</p>;
        })}
      </div>
    );
  }

  render() {
    return (
      <div className="signup-outermost">
        <div className="signup-outermost-container"> 
          <div className="signup-home">
            <Link to={"/"}>
              <button className="home-btn">&#8962;</button>
            </Link>
          </div>
          <div className="signup-container">
            <div className="signup-form">
              <div className="info">
                <div className="signup-slogan">
                  <div className="slogan">Grow your piece of the pie.</div>
                  <p className="statement">
                    Quiche is a new way to grow your money, offering a simple but
                    dynamic platform for both traditional and alternative
                    investing
                  </p>
                </div>
              </div>
              <form className="signup-subform">
                <label>
                  <input
                    type="text"
                    placeholder={"First Name"}
                    value={this.state.firstName}
                    onChange={this.update("firstName")}
                  />
                </label>
                <label>
                  <input
                    type="text"
                    placeholder={"Last Name"}
                    value={this.state.lastName}
                    onChange={this.update("lastName")}
                  />
                </label>
                <label>
                  <input
                    type="text"
                    placeholder={"Email"}
                    value={this.state.email}
                    onChange={this.update("email")}
                  />
                </label>

                <label>
                  <input
                    type="password"
                    placeholder={"Password (min. 10 characters)"}
                    value={this.state.password}
                    onChange={this.update("password")}
                  />
                </label>
                <div >{this.renderErrors()}</div>
                <button onClick={this.handleSubmit}>Continue</button>
                <p className="message">
                  Already registered?
                  <Link to={"/login"}>Log in</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;