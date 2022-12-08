import React from 'react'
import { useContext } from "react";
import { AppContext } from "../../context/auth.context";



function Todos() {
    const {todo, setTodo, user, handleDelete} = useContext(AppContext)


  if (!user) {
    return <div>
      <p> Login to see your todos</p> <a href='/login'><button>Login</button></a>
      
      </div>

  }

  if (todo.length === 0){
    return <p>no todos to display, try adding some</p>
  }

  return (
    

    <div>
    
        
       <h1>Your Todos</h1>
        <ul>
      
        {todo.map((todos)=>{
          
            return <div><li>
            <span>{todos.title}</span>
            <span>{todos.description}</span>
            </li>
            <a href= {`/add/${todo._id}`} ><button>Edit</button> </a>
            <button onClick={(event) => {handleDelete(event, todo._id) }}>Delete</button> 
            </div>
            
        })}
        </ul> 
    

    </div>
  )
}

export default Todos