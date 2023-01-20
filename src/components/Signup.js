import React,{useState} from 'react'
import emailjs from 'emailjs-com';

export const Signup = () => {
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
        if(username.length <5){
          alert("username must be five characters")
        }
       else if(password !==confirmpassword){
           alert("password not matched")
       }
      
       emailjs.sendForm('service_ox60tzc', 'template_sovimyf', e.target, 'user_gKMdgSmuAOGopEDzrJZGu')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    }
    return (
        <div>
            <h1>Sign Up....</h1>
            <form onSubmit={submitHandler}> 
                <input type="text" name="username" placeholder="username" value={username} onChange={changeHandler}/><br/>
                <input type="email" name="email" placeholder="Gmail" value={email} onChange={changeHandler}/><br/>
                <input type="number" name="number" placeholder="Number" value={number} onChange={changeHandler}/><br/>
                <input type="password" name="password" placeholder="password" value={password} onChange={changeHandler}/><br/>
                <input type="password" name="confirmpassword" placeholder="confirmpassword" value={confirmpassword} onChange={changeHandler}/><br/>
                {password !== confirmpassword ?<p style={{"color":"red"}}>password not matched</p>:null}
                <input type="submit" name="submit"/>

            </form>
        </div>
    )
}
