import React from "react";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import SearchItem from './search_item';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.renderSuggestion = this.renderSuggestion.bind(this);
    this.handleInput = this.handleInput.bind(this);
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

  handleKeyDown(e) {
    const { history } = this.props;
      if (e.keyCode === 13) {
        history.push(`/stocks/${e.currentTarget.value.toUpperCase()}`);
        // debugger
        // if (history.location.pathname === "/") {
        // };
      };
  }

  handleInput(e) {
    const searchVal = e.currentTarget.value;
    this.setState({
      searchVal,
    })
  }

  renderSuggestion(e) {
    const { assets } = this.props;
    if (assets.data.length && this.state.searchVal) {
      const filtered = assets.data.filter(obj => obj.companyName.toLowerCase().startsWith(this.state.searchVal.toLowerCase()) && obj.ticker.toLowerCase().startsWith(this.state.searchVal[0].toLowerCase())).slice(0, 5);
      return (
        <ul className="stock-suggestion-box">
          <h5>Stocks</h5>
          {
            filtered.map((stock, i) => {
              return (
                <NavLink
                  key={i}
                  to={`/stocks/${stock.ticker}`}
                  className="stock-nav-link"
                  >
                  <li className="stock-suggestion">
                    <span className="suggestion-ticker">{stock.ticker}</span>
                    <span className="suggestion-name">{stock.companyName}</span>
                  </li>
                </NavLink>
              )
            })
          }
        </ul>
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
                    onKeyDown={this.handleKeyDown}
                    onChange={this.handleInput}
                    tabIndex="0"
                    placeholder="Search"
                    autoComplete={"new-password"}
                  />
                </div>
              <div className="test-div">
                <ul>
                  <li>
                    Test list Test list t
                  </li>
                  <li>
                    Test listTest list
                  </li>
                  <li>
                    Test list
                  </li>
                  <li>
                    TeTest listst list
                  </li>
                  <li>
                    Test list
                  </li>
                  <li>
                    Test liTest listst
                  </li>
                </ul>
              </div>
              {/* <div className="lower-box">
                {this.renderSuggestion()}
              </div> */}
            </div>
          </div>
        </div>
      )

    }
  }
}

export default Search;