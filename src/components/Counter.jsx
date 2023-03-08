import React, { useCallback, useMemo, useRef, useState } from 'react'





const Counter = (e) => {
    
    const[count, setCount]=useState(3);
   let num=useRef(0);
    function increamentCounter(){
       setCount(count=>count+1);
        console.log(num.current);

    }
  
    function decreamentCounter(){
        setCount(count=>count-1);
    }

   const fibfun= useCallback(function fib(n){
    if(n===1 || n===2){
      return 1;
    }
    
          return fib(n-1)+fib(n-2)
    
        },[]
) 

  const FibMemoised= useMemo(()=>fibfun(count),[count,fibfun])


  return (
    <div className='container' style={{display:"flex" , flexDirection:"column" , width:"100%",alignItems:"center"}}>
    <div className='card' style={{display:"flex" , flexDirection:"column"  ,width:"6%", textAlign:"center" }}>
     
<button style={{backgroundColor:"black", color:"white", border:"3px solid white", borderRadius:"7px" , fontSize:"larger"}} onClick={increamentCounter}>+</button>
{count}   {FibMemoised}
<button style={{backgroundColor:"black", color:"white", border:"3px solid white", borderRadius:"7px" , fontSize:"larger"}} onClick={decreamentCounter}>-</button>


    </div>
    </div>
  )
}

export default Counter