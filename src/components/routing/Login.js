import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from './Auth'
import Navbar from './Navbar'

function Login() {
    const [user, setUser] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const auth = useAuth()

    const redirectPath = location.state?.path || '/'

    const handleLogin = () => {
        
        auth.login(user)

        // { replace: true} =>  will not be able to go previous page
        navigate(redirectPath, { replace: true})  
    }
  return (
    <div>
        <Navbar />
        <label>
            Username: <input type='text' onChange={(e) => setUser(e.target.value)} />
        </label>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login