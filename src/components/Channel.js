import { render } from "@testing-library/react";
import React from "react";

class Channel extends React.Component{

    constructor(){
        super();
        this.state={
            msg:'Pritam Mondal is a good boy'
        }

    }

    subscribe(){
        this.setState({
            msg:'Thanks for subscribing our channel'

        })
    }

    render(){
        return (
            <div>
        <h1>{this.state.msg}</h1>
        <button onClick={()=>{this.subscribe()}}>Subscribe now</button>
        </div>

        )
    }
}
export default Channel;