import { render } from "@testing-library/react";
import React from "react";
import Testing from "./Testing";

class CHeader extends React.Component{
    state={
        users:[
            {id:1,name:"Pritam",class:"A"},
            {id:2,name:"Rony",class:"B"},
        ]
    }
    render(){
        const users=this.state.users.map(function (user) {
            return(
                // <h1 key={user.id}>{user.id} {user.name} {user.class}</h1>
                <Testing key={user.id} value={user.id}></Testing>

            )
            
        });
      
        return (<div>
            <h1>Hello {this.props.ame}</h1>
            <h4>{users}</h4>
        </div>
        )
    }
}
export default CHeader;