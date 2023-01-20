import React from 'react'

export const Gallry = ({data}) => {
  return (
    
    <div className="row">
    {data.map((image) =><div key={image.id}>
    <div className="col-md-4">
    <img style={{"margin":"10px"}} src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`} 
    height="200" width="200"/>
    </div>
    </div>)}
    </div>
)
}
