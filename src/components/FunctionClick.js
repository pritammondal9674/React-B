import react from 'react'
import React from 'react'

function FunctionClick() {

    function changeEvent(){
        console.log("Hello Event Handling....")
    }

    return (
        // <react.Fragment>
        <>
        <a href="google.com" onClick={changeEvent}>Click Me</a>
        <h1>Hello Priya</h1>
        </>
        /* </react.Fragment> */
        
    )
}

export default FunctionClick
