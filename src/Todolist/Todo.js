import React,{useState} from 'react'
import { Todolist } from './Todolist';

export const Todo = () => {
    const [task,setTask] = useState("");
    const [todos,setTodos] = useState([]);
  
    const changeHandler = e =>{
      setTask(e.target.value)
    }
    const submitHandler = e =>{
      e.preventDefault();
      const newTodos = [...todos,task];
      setTodos(newTodos);
      setTask("");
    }
    const deleteHandler =(indexvalue) => {
        const newTodos = todos.filter((todo,index) => index !== indexvalue);
        setTodos(newTodos);
    }
    
    return (
      <div>
        <center>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Todo Management Application</h5>
              <form onSubmit={submitHandler}>
                <input size="30" type="text" name="task" value={task} onChange={changeHandler} /> &nbsp;&nbsp;
                <input type="submit" value="Add" name="Add"/>
              </form> <br/>
              
              <Todolist  todolist={todos} deleteHandler={deleteHandler}/>
            </div>
          </div>
        </center>
      </div>
    )
  }
  