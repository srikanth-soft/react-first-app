
import React from 'react'

//   function Greet(){
//       return <h1>Hello Srikanth</h1>
//   }

const Greet =props => {
  console.log(props)
  return <h1>Hello {props.name} was {props.fullname}</h1>
}
  export default Greet