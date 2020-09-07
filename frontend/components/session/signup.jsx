import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";

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
        <div className="signup-left-container">
          <div className="signup-left-container-2">
            <div className="signup-logo"><span>Quiche<FontAwesomeIcon icon={faPizzaSlice} className="pizza-slice" /></span></div>
            <div className="signup-header">
              <div><span className="signup-header-message">Grow your piete of the pie.</span></div>
              <div className="signup-intro-message">
                <div className="signup-intro-message">
                  <span className="message">Quiche is a new way to grow your money, offering a simple but
                  dynamic platform for both traditional and alternative investing.</span>
                </div>
              </div>
            </div>
            <div className="form-container">
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
            <div></div>
          </div>
          
        </div>
        <div className="signup-right-container">

        </div>
        <div className="signup-outermost-container"> 
          <div className="signup-container">
            <div className="signup-form">
              <div className="info">
                <div className="signup-slogan">
                  <div className="slogan"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;