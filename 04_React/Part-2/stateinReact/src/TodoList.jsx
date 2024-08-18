import React from 'react'
import { useState } from 'react'
import "./Todo.css"

export default function TodoList() {

    let [todos,settodos] = useState(["Check"]);
    let [newtodo,setnewtodo] =useState("");

    let addtask=()=>{
        settodos([...todos,newtodo])
        setnewtodo("")
    }
    

    let updateTodovalue=(event)=>{
        setnewtodo(event.target.value)
    }


  return (
    <div>
        <h2 className='heading'>ToDo List</h2>
        <input type="text"
         placeholder='Add a Task'
         value={newtodo}
         onChange={updateTodovalue}
        />
        <br />
        <button onClick={addtask}>Add Task</button>   
        <br/> <br /> <br />
        <h4>Your List</h4>
        <hr />
        <ul>
            {todos.map((todo)=>(
                <li>{todo}</li>
            ))}
        </ul>



    </div>
  )
}
