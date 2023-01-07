import React from 'react'
import AuthContainer from '../components/AuthContainer'
import LoginForm from '../components/Forms/LoginForm'

const LoginPage = () => {
  const infos ={
    text:"Don't have an account?",
    path:'/signup',
    action:"Sign up",
    greeting:"Welcome back!"
 }
  return (
    <>
      <AuthContainer info={infos}>
<LoginForm/>
      </AuthContainer>
    </>
  )
}

export default LoginPage
