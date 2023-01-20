import React ,{useState}from 'react'
const Onchange = () => {
    const [user,setUser]=useState ("")
    const handler= a =>{
        setUser(a.target.value)
    }
    return (
        <div>
            <input type="name" placeholder="username" value={user} name=
            "user" onChange={handler}/>
            <br></br>
            {user}
            
        </div>
    )
}
export default Onchange