// import logo from './logo.svg';
import React from 'react';
import './App.css';
import {Header} from './components/Header';
import CHeader from './components/CHeader';
import Channel from './components/Channel';
import FunctionClick from './components/FunctionClick';
import CFunctionClick from './components/CFunctionClick';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import Form from './components/Form';
import './appstyle.css';
import Style from './appstyle.module.css';
import Routing from './components/Routing';
import LifecycleA from './components/LifecycleA';
import Product from './components/Product';
import PostList from './components/PostList';
import HookCounter from './components/HookCounter';
import HookObject from './components/HookObject';
import HookArray from './components/HookArray';




// const name=<span>Hello React</span>;

// const newElement=React.createElement('h2',{className:'newElement'},'Hello H2');

// const test=()=>{
//   alert("Hello Pritam");
// }
// const age=function(a){
//   if(a>8){
//   return <span>You are eligiblllle</span>
//   }
//   else{
//     return<span>You are not eligible</span> 
//   }
// }

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello Pritam,{name}</h1>
//       {newElement}
//       <Header/>
//       <button onClick={test}>Click here</button>
//       {age(19)}
     
//     </div>
//   );
// }

class App extends React.Component

{
  render(){
    const numbers=this.props.numbers
    return (
      <div className ="App">
        {/* <h1 className={Style.success}>Green</h1>
        <h1 className='error'>Error</h1>
        <Header name="Anuj" last="Sharma">   
          <p>Anuj is a good boy</p>
          </Header>
        <Header name="Vivek" last="Verma">
          <a href="#">Click here</a>
          
          <p>Vivek is a good boy</p>
          </Header>
        <Header name="Rahul"/>
        <CHeader ame="Pritam" last="Mondal"/>
        <Channel/>
        <FunctionClick/>
        <CFunctionClick roll="22" numbers={numbers}/>
        
        <Stylesheet isvalue={true}></Stylesheet>
        <Inline></Inline> */}
        {/* <Form></Form> */}
        {/* <Routing/> */}
        {/* <LifecycleA/> */}
        {/* <Product/> */}
        <PostList/>
        {/* <HookCounter/> */}
        {/* <HookObject/> */}
        {/* <HookArray/> */}
        
       
        
      </div>
    )
  }
}

export default App;
