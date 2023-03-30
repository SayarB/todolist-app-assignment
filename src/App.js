import { useState,useEffect } from "react";
import { getData, postData, deleteTodo } from "./mock/getData";
import TodoItem from "./TodoItem";
import './app.css'
import { Navigate } from "react-router-dom";
import Header from "./Header";
function App() {
  const [todos,setTodos] = useState([])
  const [inputTodo, setInputTodo] = useState("")
  const [auth, setAuth] = useState(localStorage.getItem('auth'))

  const [loading, setLoading] = useState(true)

  
  useEffect(()=>{
    (()=>{
      getData().then(data=>{
        setTodos(data)
        setLoading(false)
      })
    })()
  },[])

  const checkTodo=(i, checked)=>{
    setTodos((todos)=>{
      var arr = [...todos]
      
      arr[i].checked=checked;
      return arr
    })
  }

  const handleRemove = (i)=>{
    setTodos(todos=>{
      var arr=[...todos]
      arr.splice(i,1);
      return arr
    })
    // deleteTodo()
  }

  const handleAdd = ()=>{
    if(inputTodo.length>0)setTodos(todos=>[...todos, {text:inputTodo,checked:false}])
    // postData(inputTodo)
    setInputTodo("")
  }
  if(auth==='success')
  return (
    <div className="app">
      <Header selected="todos"/>
      <div className="container">
        <h1>Todos</h1>
        <div className="add-todo-input">
          <input value={inputTodo} onChange={e=>{setInputTodo(e.target.value)}} type="text" placeholder="Type your Todo"/>
          <button onClick={handleAdd}>+</button>
        </div>
        {!loading?<div className="todo-list">
          {todos.map((todo,i)=><TodoItem onDelete={()=>{handleRemove(i)}} onCheck={(checked)=>checkTodo(i,checked)} checked={todo.checked}>{todo.text}</TodoItem>)}
        </div>:<p>Loading...</p>}
      </div>
    </div>
  )
  else return <Navigate to={'/login'}/>
}

export default App;
