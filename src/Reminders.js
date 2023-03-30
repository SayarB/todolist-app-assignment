import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './app.css'
import Header from './Header'
import { deleteReminder, getReminders } from './mock/getData'
import ReminderItem from './ReminderItem'
import './reminders.css'
function Reminders() {
    const [reminders, setReminders] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        (()=>{
            getReminders().then((data)=>{
                setReminders(data)
                setLoading(false);
            })
        })()
    },[])

  return (
    <div className='app'>
        <Header selected={'reminders'}/>
    <div className='container'>
        <h1>Reminders</h1>
        <Link className='add-reminder-btn' to="/reminder/add">+ Add Reminder</Link>
        {!loading&&
        reminders.map(rem=>
            
        <ReminderItem onDelete={()=>{
            setLoading(true)
            deleteReminder(rem.id).then(res=>{
                if(res.success){
                    setReminders(rems=>{
                        var arr = [...rems]
                        arr = arr.filter(r=>r.id!=rem.id)
                        return arr
                    })
                    setLoading(false)
                }
            })
        }} reminder={rem}/>
        )}
        {loading===false&&reminders.length===0&&<p>No Reminders</p>}
        {loading&&<p>Loading...</p>} 
    </div>
    </div>
  )
}

export default Reminders