import { Button } from '@mui/material'
import React from 'react'
import { CiLogin } from 'react-icons/ci'
import { HiOutlineLockOpen, HiOutlineMail } from 'react-icons/hi'
import { reqToLogin } from '../../Api/axios'
import { setToken } from '../../utility/localDb'

const LoginForm = () => {
  const handleLogin = (e) => {
    e.preventDefault()
    const credentials = {
      Email: e.target.Email.value,
      Password: e.target.Password.value,
    }

    reqToLogin(credentials).then(res => {
      if (res) {
        setToken(res.data.token)
        window.location.replace('/')
      }
    })


  }
  return (
    <form className='form' onSubmit={handleLogin}>


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
        <Button type='submit' variant="contained" endIcon={<CiLogin />} >
          Login
        </Button>
      </div>
    </form>
  )
}

export default LoginForm
