import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
function Header({selected}) {
  return (
    <div className='navbar'>
        <Link to="/" className={selected==="todos"?"selected":""}>Todos</Link>
        <Link to="/reminders" className={selected==="reminders"?"selected":""}>Reminders</Link>
    </div>
  )
}

export default Header