import React,{useState} from 'react'
import axios from 'axios';
import { Gallry } from './Gallry';

const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
export const Gallary = () => {
  const [search,setSearch] = useState("");
  const [data,setData]=useState([])
  
  const changeHandler = e =>{
    setSearch(e.target.value);
  }
  const submitHandler = e =>{
    e.preventDefault();
    axios
    .get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      setData(response.data.photos.photo)
    })
    
  }
    return (
        <div>
            <h1 style={{"color":"red"}}>Gallarey Application</h1><br/>
            <form onSubmit={submitHandler}>
            <input type="text" value={search} onChange={changeHandler}/><br/>
            <br/>
            <input type="submit" name="search" />
            </form>
            <br/>
            {data.length>=1?<Gallry data={data}/>:<h4>There is no images</h4>}
        </div>
    )
}
