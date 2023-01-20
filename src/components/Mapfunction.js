import React from 'react'

export default function Mapfunction() {
    const arr =[
        {
            id:1,
            tittle:"react js"
        },
        {
            id:2,
            tittle:"Node js"
        },
        {
            id:3,
            tittle:"Angular"
        }
    ]
    return (
        <div>
            {
                arr.map(
                    (value)=> <li>{value.tittle}</li>
                )
            }
        </div>
    )
}
