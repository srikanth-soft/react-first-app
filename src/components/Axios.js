import axios from 'axios'
import React,{useEffect,useState} from 'react'

export const Axios = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get('https://srikanthproject-a4e7a-default-rtdb.firebaseio.com/register.json').then(
            Response=>console.log(Response.data)
        )
    },[])
    return (
        <div>
            <h1>Hello World</h1>
            {data.map(item => <li key={item.id}>{item.data}</li>)} 
        </div>
    )
}
