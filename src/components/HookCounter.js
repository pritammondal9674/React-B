import React,{useState,useEffect} from 'react'

export default function HookCounter() {

    const [channelname,setname]=useState("Pritam Mondal");
    const [count,subscribers]=useState("subscribers");
    const [counter,setcounter]=useState(0);
    const [counter1,setcounter1]=useState(0);
    //const name=channelname[0];
    //const setname=channelname[1];

    const stateHandler = () =>{

        setname("Roni Mondal")
        subscribers("45000")
        //or channelname[1]

    }
    useEffect(()=>{
        console.log("Pritam mondal");

    },[counter1,counter]);


   const Increment=()=>{
        setcounter(counter+1)
        
    }
    const Decrement=()=>{

        setcounter1(counter1-1)
    }

    const Incremented = () =>{
        for(let i=0;i<10;i++){
            setcounter(preCount => preCount + 1)
        }
    }

    


  return (
    <div>
       {channelname}
       {count}
       <button onClick={stateHandler}>Click here</button>
       <button onClick={Increment}>Increment{counter}</button>
       <button onClick={Decrement}>Decrement{counter1}</button>
       <button onClick={Incremented}>Incremented by 10 - {counter}</button>
    </div>
  )
}
