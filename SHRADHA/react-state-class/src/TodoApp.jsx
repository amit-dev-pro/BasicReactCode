import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'

export default function TodoApp() {

    let [todo,setTodo]=useState([{task:"sample-task",id:uuidv4()}])
    let [newTodo,setNewTodo]=useState("")

    let addNewTask=()=>{
        setTodo((prevTodos)=>{
            return [...prevTodos,{task:newTodo,id:uuidv4}]
        })
         setNewTodo("")
    }

    let updateTodoValue=(event)=>{
         setNewTodo(event.target.value)
    }

    let deleteTodo=(id)=>{
          setTodo(()=>todo.filter((prevTodos)=>prevTodos.id !=id))
    }

    let converter=()=>{
        setTodo(
            todo.map((todo)=>{
            return{...todo,task:todo.task.toUpperCase()}
        }))
    }

    let toUppercase1=(id)=>{
        setTodo((prev)=>
            prev.map((todo)=>{
                if(prev.id==id){
                    return {...prev,task:todo.task.toUpperCase()}
                } else {
                    return todo;
                }
            })
        )
    }
  

    return (
        <div>
            <input placeholder="enter item" value={newTodo} onChange={updateTodoValue}></input> &nbsp;
            <button onClick={addNewTask}>add</button>
            <br></br>
            <br></br>
            <hr></hr>
            <p>Task Add</p>
            <div>
                <ul>
                   { 
                   todo.map((todos)=>(
                        // eslint-disable-next-line react/jsx-key
                        <li key={todos.id}>
                            <span>{todos.task}</span>
                            &nbsp; &nbsp;
                            <button onClick={()=>deleteTodo(todos.id)}>delete</button>
                            <button onClick={toUppercase1}>toUppercase</button>
                        </li>
                   ))

                    }
                </ul>

                <button onClick={converter}>converter</button>
            </div>
        </div>
    )
}