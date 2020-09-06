import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";
// import '../home/home.scss'

class Home extends React.Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.logout()
            .then(() => {
                this.props.history.push('/login')
            });
    }

    render() {
        const { currentUser } = this.props;
        return (
          <div className="splash-body">
            <script src="https://use.fontawesome.com/releases/v5.14.0/js/all.js"></script>
            <nav className="splash-nav">
              <Link id="logo" to="/us/en">
                Quiche
                <FontAwesomeIcon icon={faPizzaSlice} className="pizza-slice" />
              </Link>
              <div className="auth-container">
                <Link id="login" to="/login">
                  Log In
                </Link>
                <div className="auth-spacer"></div>
                <Link id="signup" to="/signup">
                  Sign Up
                </Link>
              </div>
            </nav>
            <header className="splash-content">
              <div className="splash-container">
                <div className="splash-container-2">
                  <div className="inner-splash-container">
                    <div className="inner-content">
                        <div className="heading">
                          <h1>Investing for Everyone</h1>
                        </div>
                        <div className="short-intro">
                          <span className="paragraph">
                              Quiche Lorem ipsum dolor sit amet, consectetur
                              adipiscing elit. etur adipiscing elit etur adipiscing
                              elit.
                          </span>
                        </div>
                        <div className="splash-signup">
                          <div className="splash-signup-2">
                            <div className="splash-signup-3">
                              <Link id="signup-black" to="/signup">
                                  Sign Up
                              </Link>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div className="right-content">
                    <div className="right-content-2">
                      <div className="right-content-3">
                        {/* <video autoPlay controlsList="nodownload nofullscreen noremoteplayback" loop playsInline preload="auto" className="video-content">
                          <source src="https://cdn.robinhood.com/assets/robinhood/brand/3x__8a5e77cafdc8af11be3651d08c2ff2a2.mp4" type="video/mp4"/>
                          <img className="image-container" draggable="false" role="presentation"
                          src="https://cdn.robinhood.com/assets/robinhood/brand/1x__d05b6c860541960976715b15872f6027.png"
                          srcset="https://cdn.robinhood.com/assets/robinhood/brand/1x__d05b6c860541960976715b15872f6027.png, https://cdn.robinhood.com/assets/robinhood/brand/2x__cc315b9c078102e16b08ae0e8490ee9f.png 2x, https://cdn.robinhood.com/assets/robinhood/brand/3x__f91478063fabe05577d7e75323c10826.png 3x"></img>
                        </video> */}
                        <div className="image-container">
                          <img
                            src="https://cdn.robinhood.com/assets/robinhood/brand/3x__b51cb4c0082f7a85930fbd59782a6f8e.png"
                            srcSet="https://cdn.robinhood.com/assets/robinhood/brand/1x__350f48095cefa5b4a8139e5797e5232d.png, https://cdn.robinhood.com/assets/robinhood/brand/2x__60c096535b512cab08cdcd6c20101c66.png 2x, https://cdn.robinhood.com/assets/robinhood/brand/3x__b51cb4c0082f7a85930fbd59782a6f8e.png 3x"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </div>
        );
    }
}


export default Home;

// return (
//     <nav className="nav-bar">
//         <div className='container'>
//             <div className='logo'>
//                 <Link to={'/'}>Quiche (Logo)</Link>
//             </div>
//             {navBar}
//         </div>
//     </nav>
// )