import React from 'react'
import './todoitem.css'
function TodoItem({children ,checked, onDelete, onCheck}) {
  return (
    <div className="todo-item">
        <div className='left'>
            <input type="checkbox" onChange={()=>onCheck(!checked)} checked={checked}/>
            <p className={checked?'striked':''}>{children}</p>  
        </div>
        <button onClick={onDelete}><img src="delete.png"/></button>     
    </div>
  )
}

export default TodoItem