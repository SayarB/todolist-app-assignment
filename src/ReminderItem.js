import React from 'react'
import { Link } from 'react-router-dom'
import './reminders.css'
function ReminderItem({onDelete, reminder}) {
  return (
    
    <div className="reminder-item">
        <Link className='reminder-link' to={"/reminder/"+reminder.id}>
        <div className='left'>
            <p className="title">{reminder?.title}</p> 
            <p className='subtitle'>{reminder?.date}</p> 
        </div>
        </Link>
        <button onClick={(e)=>{
            onDelete()
        }}><img alt='' src="delete.png"/></button>     
    </div>
  )
}

export default ReminderItem