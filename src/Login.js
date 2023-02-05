import React from 'react'
import { useParams } from 'react-router-dom'
import './Login.css'
import { loginUrl } from './spotify'
const Login = () => {

  return (
    <div className='login'>
        <img src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt=''/>
        {/* spotify logo */}
        <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        {/* button to login */}
    </div>
  )
}

export default Login