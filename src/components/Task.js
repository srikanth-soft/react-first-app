import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'

export const Task = () => {
    const [data,setData]=useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos').then(
            Response=>Response.json()
        ).then(json=> setData(json))
    },[])
    return (
        <div>
            {data.length>=1 ? data.map( data => 
            {
                return <div style={{"border":"1px solid black","padding":"10px"}}><Link to={'/task/${data.id}'}>{data.tittle}</Link></div>
            }
            ):null
}
        </div>

    )
}
