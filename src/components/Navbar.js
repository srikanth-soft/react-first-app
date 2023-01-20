import React from 'react'
import {Link} from 'react-router-dom'

export const Navbar = () => {
    return (
        <div className="navbar">
            {/* <ul>
               <Link to="/"><li>Home</li></Link> 
                <Link to="/Service"><li>Services</li></Link>
                <Link to="/About"><li>About us</li></Link>
                <Link to="/Task"><li>Task</li></Link>
            </ul> */}
            <ul>
               <Link to="/"><li>Home</li></Link> 
                <Link to="/Todo"><li>Todo</li></Link>
                <Link to="/Gallary"><li>Gallary</li></Link>
                <Link to="/Weather"><li>Weather</li></Link>
            </ul>
        </div>
    )
}
 