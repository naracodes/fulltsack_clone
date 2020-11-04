import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class Search extends React.Component {
    constructor(props) {
      super(props)
      this.handleKeyDown = this.handleKeyDown.bind(this);
    }

  handleKeyDown(e) {
    const { history } = this.props;
      if (e.keyCode === 13) {
        debugger
        history.push(`/stocks/${e.currentTarget.value.toUpperCase()}`);
        // debugger
        // if (history.location.pathname === "/") {
        // };
      };
  }

  render() {
    return (
          <div className="search-outer">
            <div className="search-box">
              <div className="search-inner-box">
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
                <input
                  type="text"
                  id="search-bar"
                  onKeyDown={this.handleKeyDown}
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