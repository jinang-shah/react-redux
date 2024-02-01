import React from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from './Auth'

function RequireAuth({children}) {  

    // useLocation returns the current location object
    const location = useLocation()
    const auth = useAuth()

    // The state prop in React Router is used to pass state data along with the navigation. It allows you to provide additional information that can be accessed in the destination component after the navigation occurs.

    // if user not authenticated or autherised then redirect to login page
    if(!auth.user){
        return <Navigate to='/login' state={{path: location.pathname}} />
    }

  // else return children or page user want to access  
  return children
}

export default RequireAuth