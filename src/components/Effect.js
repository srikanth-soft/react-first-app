import React,{useState,useEffect}from 'react'

function Effect() {
    const [count,setCount] = useState(0)
    useEffect(() => console.log(count),[count])
    return(
        <div>
             <h1>You Clicked {count} Times</h1>  
          <button onClick ={() => setCount(count+1)}>change</button>
        </div>
    )
}
export default Effect