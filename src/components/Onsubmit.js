import React,{useState} from 'react'

function Onsubmit () {
    const [data,setData] = useState({
        username:'',
        password:''
    })
    const {username,password} = data;
    const handleerChange= e =>{
        setData({...data,[e.target.name] :[e.target.value]})
    }
    const submitHandler = e =>{
        e.preventDefault();
        console.log(data);
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text"  value={username} placeholder="username"name="username"
                onChange={handleerChange} /><br/><br/>
            
                <input type="password" placeholder="password" value={password} name="password" 
                 onChange={handleerChange}/><br/><br/>
                <input type="submit" name="submit"/>
            </form>
        </div>
    )
}
export default Onsubmit