import React,{useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { addReminder, getReminderByID, updateReminder } from './mock/getData'
function AddReminder() {

    const {id} = useParams()
    const [title, setTitle] = useState("")
    const [date, setDate] = useState(new Date())
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    useEffect(()=>{
        (()=>{
            if(id!=='add')
                getReminderByID(id).then(rem=>{
                    setTitle(rem.title)
                    setDate(rem.date)
                    setLoading(false)
                }).catch((e)=>{

                    console.log(e)
                })
            else setLoading(false)
        })()

    },[])


    const handleSubmit = (e)=>{
        e.preventDefault()
        if(title==="" || date==="") return
        if(id==='add'){
            setLoading(true)
            addReminder({title, date}).then(res=>{
                if(res.success){
                    setLoading(false)
                    navigate('/reminders')
                }
            })
        }else{
            setLoading(true)
            updateReminder({id,title,date}).then(res=>{
                if(res.success){
                    setLoading(false)
                    navigate('/reminders')
                }
            })
        }
    }

  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
            {!loading?<><input className='input-field' type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder="Title"/>
            <input type="date" value={date} min={new Date()} className='input-field' onChange={(e)=>{
                if(new Date(e.target.value)>=new Date())
                    setDate(e.target.value)
                else
                    alert("You cannot select a past date")
            }}/>
            <button className='btn' type='submit'>
                Submit
            </button></>
            :<p>Loading....</p>}
        </form>
    </div>
  )
}

export default AddReminder