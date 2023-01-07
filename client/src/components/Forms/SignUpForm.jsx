import React from 'react'
import {AiOutlineUser} from 'react-icons/ai'
import {HiOutlineMail,HiOutlineLockOpen} from 'react-icons/hi'

const SignUpForm = () => {

  

  return (
    <form className='form'>
     <div className="form-group">
      <label htmlFor="FirstName">First Name</label>
      <div className='form-input' tabIndex={1} >
      <span><AiOutlineUser/></span>
      <input type="text" id='FirstName' autoComplete={'off'} required className=''/>
      </div>
       </div>    
     <div className="form-group">
     <label htmlFor="LastName">Last Name</label>
      <div className='form-input' tabIndex={1}>
      <span><AiOutlineUser/></span>
      <input type="text" id='LastName' autoComplete={'off'} required className=''/>
      </div>
      </div>    
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
      <button type='submit' className='btn btn-primary'>Sign up</button>
      </div>    
    </form>
  )
}

export default SignUpForm
