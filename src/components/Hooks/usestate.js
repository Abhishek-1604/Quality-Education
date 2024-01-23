import { useState } from "react";

export function Change(){
    // const [color,setColor]=useState(["Blue","Orange"])
    const[count,setCount]=useState(0)
    let reset=()=>{
        setCount(0)
    }
    return(
        <>
        
        {/* <h1>{color[0]}</h1> */}
        <h1 style={{color:"red"}}>{count}</h1>
        {/* <button type="button" style={{backgroundColor:'skyblue',borderRadius:20}} onClick={()=>setColor(["Red"])}>Change</button> */}
        <button type="button" style={{backgroundColor:'pink',borderRadius:20}} onClick={()=>setCount(count+1)}>Increment</button>
        <button type="button" style={{backgroundColor:'green',borderRadius:20}} onClick={()=>setCount(count-1)}>Decrement</button>
        <button type="button" style={{backgroundColor:'yellow',borderRadius:20}} onClick={()=>reset(0)}>Reset</button>
        </>
    )
}