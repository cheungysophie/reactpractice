import React from 'react';
import './styles.css';

function Sticky(props) {
    return (
        <div className="noteStyle">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    )
}

export default Sticky;