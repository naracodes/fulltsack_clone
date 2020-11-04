import React from 'react';

class Search extends React.Component {
    state = {
        query: '',
    }

    handleInputChange = () => {
        this.setState({
            query:this.search.value
        })
    }

    render() {
        return (
            
        )
    }
}