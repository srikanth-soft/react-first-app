import React from 'react'
import { useHistory } from 'react-router';
import { Service } from './Service';

export const userContext=React.createContext();
export const About = () => {
    const history=useHistory();
    return (
        <div>
            <h1>About us</h1>
            <button className="btn btn-primary" onClick={()=>history.push('./')}>Click </button>
            
            <userContext.Provider value={"service are avilable"}>
                <Service/>
            </userContext.Provider>

        </div>
    )
}
