import React from "react";

// function Header(){
//     return <h1>Hello functional Component</h1>
// }


//Advance Technique Arrow function

export const Header=(props)=>{
    // console.log(props);
    return ( <div>
    <h1>Hello {props.name} {props.last}</h1>
    {props.children}
    </div>
    )

}

// export default Header