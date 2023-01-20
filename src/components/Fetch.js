import React,{useEffect,useState} from 'react'

export const Fetch = () => {
    const [data,setData]=useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users').then(
            Response=>Response.json()
        ).then(json=> setData(json))
    },[])
    return (
        <div>
            {data.map(item => <li key={item.id}>{item.name}</li>)}
        </div>
    )
}
