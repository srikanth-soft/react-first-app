import React,{useRef,useEffect} from 'react'

export const Useref = () => {
    const data =useRef(null);
    const submitHandler = e=>{
        e.preventDefault();
        console.log(data.current.value);
        //updating
        //  data.current.value="Hello world"
    }

    useEffect(() => {
      data.current.focus();
    }, [])
    return (
        <div>
        <form onSubmit={submitHandler}>
           <input ref={data} type="text" placeholder="Enter your name" /> 
           <input type="submit" />
        </form>
        </div>
    )
}
