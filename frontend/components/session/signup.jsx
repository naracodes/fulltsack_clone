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
    e.preventDefault();
    this.props.createNewUser(this.state).then(() => {
      this.props.history.push("/");
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
      <div className="signup-body">
        <div className="signup-outermost">
          <div className="signup-left-container">
            <div className="signup-left-container-2">
              <div className="signup-logo"><span>Quiche<FontAwesomeIcon icon={faPizzaSlice} className="pizza-slice" /></span></div>
              <div className="signup-header">
                <div><span className="signup-header-message">Grow your piece of the pie.</span></div>
                <div className="signup-intro-message">
                  <div className="signup-intro-message-2">
                    <span className="message">Quiche is a new way to grow your money, offering a simple but
                    dynamic platform for both traditional and alternative investing.</span>
                  </div>
                </div>
              </div>
              <div className="form-container">
                <form className="signup-subform">
                  <div className="full-name">
                    <div className="first-name">
                      <div className="first-name-input">
                        <input
                          type="text"
                          className="first-name-input-2"
                          placeholder={"First Name"}
                          value={this.state.firstName}
                          onChange={this.update("firstName")}
                        />
                      </div>
                    </div>
                    <div className="last-name">
                      <div className="last-name-input">
                        <input
                          type="text"
                          className="last-name-input-2"
                          placeholder={"Last Name"}
                          value={this.state.lastName}
                          onChange={this.update("lastName")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="email-container">
                    <div className="email-input">
                      <input
                        type="text"
                        className="email-input-2"
                        placeholder={"Email"}
                        value={this.state.email}
                        onChange={this.update("email")}
                      />
                    </div>
                  </div>
                  <div className="password-container">
                    <div className="password-input">
                      <input
                        type="password"
                        className="password-input-2"
                        placeholder={"Password (min. 10 characters)"}
                        value={this.state.password}
                        onChange={this.update("password")}
                      />
                    </div>
                  </div>
                  <div className="button-container">
                    <div className="button-content">
                      <button onClick={this.handleSubmit}>Continue</button>
                    </div>
                    <div className="already-registered">
                      <span>Already registered?</span>
                      <br/>
                      <Link to={"/login"}>Log in</Link>
                    </div>
                  </div>
                  <div className="signup-error">{this.renderErrors()}</div>
                </form>
              </div>
              <div className="t-and-c">
                <div className="t-and-c-2">
                  <div className="t-and-c-3">
                    <div className="t-and-c-4">
                      <div className="terms-text-1">
                        All investments involve risk and the past performance of a security, or 
                        financial product does not guarantee future results or returns. Keep in 
                        mind that while diversification may help spread risk it does not assure a profit, or 
                        protect against loss, in a down market. There is always the potential of losing money 
                        when you invest in securities, or other financial products. Investors should consider 
                        their investment objectives and risks carefully before investing.
                      </div>
                      <div className="terms-text-2">All securities and investments are offered to self-directed customers by Quiche. Additional information
                        about your broker can be found by clicking here. Quiche is a wholly owned entity of <a href="">Nara Lee Inc.</a>
                      </div>
                      <div className="terms-text-3">Check the background of Quiche and Nara Lee Inc. on My Personal Website.</div>
                      <div className="terms-text-4"><a href="">{"Quiche Terms & Conditions"}</a> <a href="">Contact Us</a> <a href="">FAQ</a></div>
                      <div className="trademark">© 2020 Quiche. All rights reserved.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="signup-right-container">
            <div className="signup-right-container-2">
              <div className="intro-head-1">
                <span>Comission-free stock trading</span>
              </div>
              <div>
                <span>
                  We’ve cut the fat that makes other brokerages costly,
                  like manual account management and hundreds of storefront locations,
                  so we can offer zero commission trading.
                </span>
              </div>
              <div className="intro-head-2">
                <span>Account Protection</span>
              </div>
              <div>
                <span>
                  Quiche is a member of WISE. Securities in your account are protected up to $500,000,000. For details, please see HERE.
                </span>
              </div>
              <div className="intro-head-3">
                <span>Keep tabs on your money</span>
              </div>
              <div>
                <span>
                  Set up customized news and notifications to
                  stay on top of your assets as casually or as relentlessly as you like.
                  Controlling the flow of info is up to you.
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Signup;