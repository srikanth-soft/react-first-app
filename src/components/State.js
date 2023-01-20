// import React, {useState} from 'react'

// const State = () => {
//     const [name,setName] = useState ("srikanth")
//     return (
//         <div>
//             <h1>{name}</h1>
//             <button onClick={() => setName("srikanth number")}>change</button>
//         </div>
//     )
// }
// export default State;
import React,{useState} from 'react'
const State = () => {
    const [count,setCount] = useState(0)
    return (
        <div>
          <h1>you clicked {count} times</h1>  
          <button onClick ={() => setCount(count+5)}>change</button>
        </div>
    )
}
export default State;