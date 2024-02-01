import React from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'

function ProfilePage() {

  const navigate = useNavigate()
  const auth = useAuth()

  const handleLogOut = () => {
    auth.logout()
    navigate('/')
  }

  return (
    <div>
      {
        auth.user ? (
          <div>
            <h2>Hello {auth.user}</h2>
           <button onClick={handleLogOut}>Logout</button>
          </div>     
        ) : (
          <h2>Please login</h2>
        )
      }
    </div>
  )
}

export default ProfilePage