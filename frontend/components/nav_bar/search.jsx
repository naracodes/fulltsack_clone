import React from "react";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import SearchItem from './search_item';
import AssetShowContainer from '../assets/asset_show_container';

class Search extends React.Component {
  constructor(props) {
    super(props)
    // this.handleKeyDown = this.handleKeyDown.bind(this);
    this.renderSuggestion = this.renderSuggestion.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      loading: true,
      filtered: null,
      searchVal: "",
    }
  }

  componentDidMount() {
    const { fetchAssets } = this.props;
    fetchAssets().then(() => this.setState({loading: false}));
  }

  handleClick(ticker) {
    const { history } = this.props;
    debugger
    return e => {
      debugger
      // history.push(`/stocks/${ticker.toUpperCase()}`);
      <AssetShowContainer ticker={ticker} />
      window.localStorage.setItem("nextTicker", ticker);
    }
  }

  // handleKeyDown(e) {
  //   const { history } = this.props;
  //     if (e.keyCode === 13) {
  //       history.push(`/stocks/${e.currentTarget.value.toUpperCase()}`);
  //       // debugger
  //       // if (history.location.pathname === "/") {
  //       // };
  //     };
  // }

  handleInput(e) {
    const searchVal = e.currentTarget.value;
    this.setState({
      searchVal,
    })
  }

  kmp(needle) {
      const lps = new Array(needle.length).fill(0);
    let j = 0;
    for (let i = 1; i < lps.length;) {
        if (needle[i] !== needle[j]) {
            if (j === 0) {
                i++;
            } else {
                j = lps[j - 1];
            }
        } else if (needle[i] === needle[j]) {
            lps[i] = j + 1;
            j++;
            i++;
        }
    }
    return lps;
  }

  strStr(haystack, needle) {
      if (needle.length === 0) return 0;
    const lps = this.kmp(needle);
    let j = 0;
    for (let i = 0; i < haystack.length;) {
        if (haystack[i] === needle[j]) {
            if (j < needle.length - 1) {
                i++;
                j++
            } else {
                return i - j;
            }
        } else if (haystack[i] !== needle[j]) {
            if (j === 0) {
                i++;
            } else {
                j = lps[j - 1];
            }
        }
    }
    return -1;
  }



  renderSuggestion(e) {
    const { assets } = this.props;
    if (assets.data.length && this.state.searchVal) {
      // const filtered = assets.data.filter(obj => obj.companyName.toLowerCase().startsWith(this.state.searchVal.toLowerCase()) &&
      //  obj.ticker.toLowerCase().startsWith(this.state.searchVal[0].toLowerCase())).slice(0, 5);
      const filtered = assets.data.filter(obj => this.strStr(obj.companyName.toLowerCase(), this.state.searchVal.toLowerCase()) >= 0 || this.strStr(obj.ticker.toLowerCase(), this.state.searchVal.toLowerCase()) >= 0);
      return (
        <div className="test-div">
          <h4>Stocks</h4>
          {
            filtered.map((stock, i) => {
              return (                
                  <NavLink 
                   key={i}
                   to={`/stocks/${stock.ticker}`}
                   className="stock-nav-link"
                   style={{textDecoration: 'none'}}
                  >
                    <div className="each-stock">
                      <div className="each-stock-ticker">{stock.ticker}</div>
                      <div className="each=stock-name">{stock.companyName}</div>
                    </div>
                  </NavLink>
              )
            })
          }
        </div>
        // <div className="test-div">
        //   <h4>Stocks</h4>
        //   <table style={{width: "100%"}}>
        //     <colgroup style={{height: "30px"}}>
        //       <col span="1" style={{width: "20%"}} />
        //       <col span="1" style={{width: "80%"}} />
        //     </colgroup>
        //       <tbody>
        //         {
        //           filtered.map((stock, i) => {
        //             return (
        //                 <tr key={i} onClick={this.handleClick(stock.ticker)}>
        //                   <td>{stock.ticker}</td>
        //                   <td>{stock.companyName}</td>
        //                 </tr>
        //               // <NavLink
        //               //   key={i}
        //               //   to={`/stocks/${stock.ticker}`}
        //               //   className="stock-nav-link"
        //               //   >
        //               //   <li className="stock-suggestion">
        //               //     <span className="suggestion-ticker">{stock.ticker}</span>
        //               //     <span className="suggestion-name">{stock.companyName}</span>
        //               //   </li>
        //               // </NavLink>
        //             )
        //           })
        //         }
        //       </tbody>
        //   </table>
        // </div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }

  render() {
    const { assets } = this.props;
    if (this.state.loading) {
      return (
        <div>
          Loading...
        </div>
      )
    } else {
      return (
        <div className="search-outer">
          <div className="search-box">
            <div className="search-inner-box">
              <div className="icon-container">
                  <div className="magnify">
                    <span className="search-icon-box">
                      <FontAwesomeIcon icon={faSearch} className="search-icon" />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="search-input"
                    id="search-bar"
                    // onKeyDown={this.handleKeyDown}
                    onChange={this.handleInput}
                    tabIndex="0"
                    placeholder="Search"
                    autoComplete={"new-password"}
                  />
                </div>
              {/* <div className="test-div">
                <h4>Stocks</h4>
                <table style={{width: "100%"}}>
                  <colgroup style={{height: "30px"}}>
                    <col span="1" style={{width: "20%"}} />
                    <col span="1" style={{width: "80%"}} />
                  </colgroup>
                  <tbody>
                    <tr>
                      <td>GO</td>
                      <td>Grocery Outlet</td>
                    </tr>
                    <tr>
                      <td>GOOGL</td>
                      <td>Alphabet Class A</td>
                    </tr>
                    <tr>
                      <td>GOOG</td>
                      <td>Alphabet Class C</td>
                    </tr>
                    <tr>
                      <td>GLD</td>
                      <td>SPDR Gold Trust</td>
                    </tr>
                    <tr>
                      <td>GOLD</td>
                      <td>Barrick Gold</td>
                    </tr>
                    <tr>
                      <td>GDX</td>
                      <td>VanEck Vectors Gold Miners ETF</td>
                    </tr>
                  </tbody>
                </table>
              </div> */}
                {this.renderSuggestion()}
            </div>
          </div>
        </div>
      )

    }
  }
}

export default Search;