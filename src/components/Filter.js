import React,{useState} from 'react'
import Data from './cities.json';

export const Filter = () => {
    const [search,setSearch]=useState('');

    return (
        <div>
            <h1>Enter City Name :</h1>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/><br/><br/>
            {Data.filter(city => city.name.toLowerCase().includes(search.toLowerCase())).map(city=> {
                return <div style={{"border":"1px solid black","padding":"10px","margin":"10px","maxWidth":"70"}}>
                    {city.name}
                    </div>
            })}
        </div>
    )
}
