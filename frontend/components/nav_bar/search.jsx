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
      const filtered = assets.data.filter(obj => obj.companyName.startsWith(this.state.searchVal.toUpperCase()) && obj.ticker.startsWith(this.state.searchVal.toUpperCase())).slice(0, 5);
      return (
        <ul>
          <h5>Stocks</h5>
          {
            filtered.map((stock, i) => {
              return (
                <NavLink
                  key={i}
                  to={`/stocks/${stock.ticker}`}
                  >
                  <li>
                    <span>{stock.ticker}</span>
                    <span>{stock.companyName}</span>
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
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
              <input
                type="text"
                id="search-bar"
                onKeyDown={this.handleKeyDown}
                onChange={this.handleInput}
                tabIndex="0"
                placeholder="Search"
              />
            </div>
          </div>
          {this.renderSuggestion()}
        </div>
      )

    }
  }
}

export default Search;