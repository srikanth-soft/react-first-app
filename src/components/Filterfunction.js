import React from 'react'

export default function Filterfunction() {
    const arr=[10,20,30,40,50,60,70]
    const filtered= arr.filter(item=>item>40)
    return (
        <div>
            {
                filtered.map(item=><li>{item}</li>)
            }
            <h1>Hello World.....!</h1>
        </div>
    )
}
