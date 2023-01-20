import React ,{useState} from 'react'
import { Redirect } from 'react-router'
import image from '../image.png';
import audio from '../kgf.mp3';
import video from '../video.mp4'

export const Home = () => {
    const [auth,setAuth]=useState(false);
    if(auth){
        return < Redirect to='/service'/>
    }
    return (
        <div>
            <h1>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</h1>
            <button className="btn btn-primary" onClick={()=> setAuth(true)}>Login</button><br/>
            <div className="row">
            <div className="col-md-4">
            <img src={image} height="250" width="400" />
            <a href={image} className="btn btn-primary" download="image">Click to Download</a>
            </div>
            <div className="col-md-4">
            <audio controls>
                <source src={audio} type="audio/ogg"/>
            </audio>    
            </div>
            <div className="col-md-4">
                <video height="auto" width="400" controls>
                    <source src={video} type="video/mp4"/>
                </video>
            </div>
            </div>
        </div>
    )
}
