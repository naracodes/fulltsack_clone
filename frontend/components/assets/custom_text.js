import React from 'react';

class CustomText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMore: false,
        };
    }

    render() {
        const { children, numChars } = this.props;
        debugger
        return children;
    }
}

export default CustomText;