let data={
    todos:[
        {text:"Buy a new gaming Laptop",checked:false},
        {text:"Complete a previous task",checked:true},
        {text:"Create video for Youtube",checked:false},
        {text:"Create a new portfolio site",checked:false}
    ]
}

localStorage.setItem('reminders',JSON.stringify([]))

export const getData = ()=>{
    return new Promise((resolve,_)=>{
        setTimeout(()=>{
            resolve(data.todos)
        },2000)
    })
}
export const getReminders = ()=>{
    return new Promise((resolve,_)=>{
        setTimeout(()=>{
            console.log(JSON.parse(localStorage.getItem('reminders')))
            resolve(JSON.parse(localStorage.getItem('reminders')))
        },2000)
    })
}

export const getReminderByID = (id)=>{
    return new Promise((resolve,reject)=>{
        const reminders = JSON.parse(localStorage.getItem('reminders'))
        console.log(reminders)
        const rem = reminders.filter((r)=>r.id==id)
        console.log(rem[0])
        setTimeout(()=>{
            if(rem.length>0)
                resolve(rem[0])
            else
                reject({error:'not found'})
        },2000)
    })
}

export const addReminder=(rem)=>{
    return new Promise((resolve,reject)=>{
        
        setTimeout(()=>{
            const reminders = JSON.parse(localStorage.getItem('reminders'))
            localStorage.setItem('reminders',JSON.stringify([...reminders,{...rem, id:reminders[reminders.length-1]?.id+1||1}]))
            resolve({success:true})
        },2000)
    })
}

export const deleteReminder = (id)=>{
    return new Promise((resolve,reject)=>{
        
        setTimeout(()=>{
            const reminders = JSON.parse(localStorage.getItem('reminders'))
            const arr = reminders.filter((r)=>r.id!=id)
            localStorage.setItem('reminders', JSON.stringify(arr))
            resolve({success:true})
        },2000)
    })
}

export const updateReminder = (rem)=>{
    return new Promise((resolve,_)=>{
        setTimeout(()=>{
            const reminders = JSON.parse(localStorage.getItem('reminders'))
            for (var i in reminders){
                if(reminders[i].id==rem.id){
                    reminders[i]={...rem}
                }
            }
            localStorage.setItem('reminders', JSON.stringify(reminders))
            resolve({success:true})
        },1000)
    })
}

// export const postData=(newTodo)=>{
//     return new Promise((resolve,_)=>{
//         setTimeout(()=>{
//             data.todos.push(newTodo)
//             resolve({message:"success"})
//         },2000)
//     })
// }
// export const deleteTodo=(i)=>{
//     return new Promise((resolve,_)=>{
//         setTimeout(()=>{
//             data.todos.splice(i,1)
//             resolve({message:"success"})
//         },1000)
//     })
// }