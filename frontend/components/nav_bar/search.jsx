import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.renderSuggestion = this.renderSuggestion.bind(this);
  }

  componentDidMount() {
    const { fetchAssets } = this.props;
    fetchAssets();
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

  renderSuggestion(e) {
    const { assets } = this.props;
    const names = Object.keys(assets.data);
    const tickers = Object.values(assets.data)
    debugger

    assets.data.map(obj => {
      debugger
      obj.companyName
      ticker.startsWith(e.currentTarget.value.toUpperCase())
    })
    return (
      <div className="suggestion">
        {}
      </div>
    )
  }

  render() {
    const { assets } = this.props;
    return (
      <div className="search-outer">
        <div className="search-box">
          <div className="search-inner-box">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input
              type="text"
              id="search-bar"
              onKeyDown={this.handleKeyDown}
              onChange={this.renderSuggestion}
              tabIndex="0"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Search;