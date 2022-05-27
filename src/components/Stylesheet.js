import React from 'react'
import './Style.css';

function Stylesheet(props) {
    let className=props.isvalue ? 'demo' : 'demo2';
    return (
        <div>
            <h1 className={className}>Hello Stylesheet</h1>



        </div>
    )
}

export default Stylesheet
