import React,{useState} from 'react'

export default function Hooks_usestate2() {
    const[count,setCount]=useState(0)
    //useState ekta hook

const handleIncrement =() =>{
   setCount(count+1);

}

  return (
    <div>
    <h3>increment using functional component </h3>
    <h1>count:{count}</h1>
    <button onClick={handleIncrement}>increment</button>
    </div>
  )
}
