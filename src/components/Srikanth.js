import React,{useState} from 'react'
import axios from 'axios';

export const Srikanth = () => {
    const [data,setData]=useState({
        Username:'',
        email:'',
        number:'',
        password:'',
        confirmpassword:''
    })
    const {username,email,number,password,confirmpassword}= data;
    const changeHandler=e =>{
        setData({...data,[e.target.name]: e.target.value})
    }
    const submitHandler=e =>{
        e.preventDefault()
        axios.post('https://srikanthproject-a4e7a-default-rtdb.firebaseio.com/register.json' ,
        data).then(() => alert("submited successfully"))
        
    }
    return (
        <div>
            <h1>Sign Up....</h1>
            <form onSubmit={submitHandler}> 
                <input type="text" name="username"  value={username} onChange={changeHandler}/><br/>
                <input type="email" name="email" value={email} onChange={changeHandler}/><br/>
                <input type="number" name="number" value={number} onChange={changeHandler}/><br/>
                <input type="password" name="password" value={password} onChange={changeHandler}/><br/>
                <input type="password" name="confirmpassword" value={confirmpassword} onChange={changeHandler}/><br/>
                {password !== confirmpassword ?<p style={{"color":"red"}}>password not matched</p>:null}
                <input type="submit" name="submit"/>

            </form>
        </div>
    )
}
