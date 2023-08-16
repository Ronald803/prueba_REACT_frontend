import React from 'react'
import LoginPage from './LoginPage'
import CreateUserPage from './CreateUserPage'

export default function Login_CreateUser() {
  return (
    <div className='bg-danger bg-opacity-25 contenedor'>
        <div className='row mx-auto' style={{"maxWidth":"900px"}}>
            <div className='col-md-6'>
                <LoginPage></LoginPage>
            </div>
            <div className='col-md-6'>
                <CreateUserPage></CreateUserPage>
            </div>
        </div>
    </div>
  )
}
