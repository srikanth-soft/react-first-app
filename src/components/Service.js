import React from 'react';
import { userContext } from './About';

// export const Service = ({match}) => {
//     return (
//         <div>
//             <h1>Service pages are: {match.params.name}</h1>
//         </div>
//     )
// }

 export const Service =()=>{
    return(
        <div>
           
            <userContext.Consumer>
               {value=><div>{value}</div>}
            </userContext.Consumer>
        </div>
     )
 }