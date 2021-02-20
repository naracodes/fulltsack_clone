import React from 'react';

class CustomText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMore: false,
        };
    }

    render() {
        const { children, numChars, showMoreText, showLessText } = this.props;
        const { showMore } = this.state;
        let truncated = children.substr(0, numChars);
        let lastIndex = truncated.lastIndexOf(".") > 0 ? truncated.lastIndexOf(".") : truncated.lastIndexOf(",");
        const shortented = truncated.substr(0, lastIndex + 1);

        const ReadMore = () => {
            return (numChars >= children.length || !showMoreText ? null :
            <span className="expand-desc" onClick={() => this.setState({ showMore: true })}>
                {showMoreText}
            </span>)
        }
        const ReadLess = () => {
            return (numChars >= children.length || !showLessText ? null :
            <span className="expand-desc" onClick={() => this.setState({ showMore: false })}>
                {showLessText}
            </span>)
        }
        
        return (
            <React.Fragment>
                {showMore ? children : shortented} {showMore ? <span id="expand-desc" onClick={() => this.setState({showMore: false})}>Read Less</span> : <span id="expand-desc" onClick={() => this.setState({showMore: true})}>Read More</span>}
            </React.Fragment>
        );
    }
}

export default CustomText;