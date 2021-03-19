import React from 'react';
// import './Spinner.css';

const spinner = (props) => {
    return (
        <div className={props.type}>Loading...</div>
    )
};

export default spinner;