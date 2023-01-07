import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { HiOutlineLockOpen, HiOutlineMail } from 'react-icons/hi'

const LoginForm = () => {
  return (
    <form className='form'>
   
 
    <div className="form-group">
    <label htmlFor="Email">Email</label>
    <div className='form-input' tabIndex={1}> 
     <span><HiOutlineMail/></span>
     <input type="email" id='Email'  autoComplete={'off'}required className=''/>
     </div>
     </div>    
    <div className="form-group">
    <label htmlFor="Password">Choose Password</label>
     <div className='form-input' tabIndex={1}>
     <span><HiOutlineLockOpen/></span>
     <input type="password" id='Password' autoComplete={'off'} required className=''/>
     </div>
     </div>    
    <div className="form-group">
     <button type='submit' className='btn btn-primary'>Login</button>
     </div>    
   </form>
  )
}

export default LoginForm
