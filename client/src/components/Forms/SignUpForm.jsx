import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { HiOutlineMail, HiOutlineLockOpen } from 'react-icons/hi'
import { reqToSignup } from '../../Api/axios'
import { useNavigate } from 'react-router-dom'

const SignUpForm = () => {
  const navigate = useNavigate()

  const handleSignup = (e) => {
    e.preventDefault()
    const credentials = {
      Email: e.target.Email.value,
      FirstName: e.target.FirstName.value,
      LastName: e.target.LastName.value,
      Password: e.target.Password.value,
    }

    reqToSignup(credentials).then(res => {
      if (res) {
        navigate('/login')
      }
    })


  }



  return (
    <form className='form' onSubmit={handleSignup}>
      <div className="form-group">
        <label htmlFor="FirstName">First Name</label>
        <div className='form-input' tabIndex={1} >
          <span><AiOutlineUser /></span>
          <input type="text" id='FirstName' autoComplete={'off'} required className='' />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="LastName">Last Name</label>
        <div className='form-input' tabIndex={1}>
          <span><AiOutlineUser /></span>
          <input type="text" id='LastName' autoComplete={'off'} required className='' />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="Email">Email</label>
        <div className='form-input' tabIndex={1}>
          <span><HiOutlineMail /></span>
          <input type="email" id='Email' autoComplete={'off'} required className='' />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="Password">Choose Password</label>
        <div className='form-input' tabIndex={1}>
          <span><HiOutlineLockOpen /></span>
          <input type="password" id='Password' autoComplete={'off'} required className='' />
        </div>
      </div>
      <div className="form-group">
        <button type='submit' className='btn btn-primary'>Sign up</button>
      </div>
    </form>
  )
}

export default SignUpForm
