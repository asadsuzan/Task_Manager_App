import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import '../assets/css/auth-layout/AuthContainer.css'
const AuthContainer = ({info,children}) => {
 
  
  const navigate = useNavigate()
  return (
    <div className='auth-container'>
     <div className="auth-header d-flex justify-content-between align-items-center">
         <div className="left-side">
          <img src={logo} alt="app-logo" />
          <span>Task Manager</span>
         </div>
         <div className="right-side">
           <span>{info.text}</span>
           <button class="btn btn-primary" onClick={()=>navigate(info.path)}>{info.action}</button>

         </div>
     </div>
     <div className="auth-body">
      <div className='welcome-thumbnail-left'></div>
      <div className="auth-form">
        <div className="title text-center text-success fs-5 fw-bold my-3">{info.greeting}</div>
        {children}
      </div>
      <div className='welcome-thumbnail-right'></div>
     </div>
    </div>
  )
}

export default AuthContainer
