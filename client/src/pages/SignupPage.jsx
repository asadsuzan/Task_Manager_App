import React from 'react'
import AuthContainer from '../components/AuthContainer'
import SignUpForm from '../components/Forms/SignUpForm'


const SignupPage = () => {
  const infos ={
    text:'Already playing with Task Manager',
    path:'/login',
    action:"Login",
    greeting:"Let's go!"
 }
  return (
    <>
      <AuthContainer info ={infos}>
      <SignUpForm/>
      </AuthContainer>
    </>
  )
}

export default SignupPage
