import React from 'react'
import { useParams } from 'react-router-dom'

function UserDetails() {
    const { userId } = useParams()
  return (
    <div>User {userId} Details</div>
  )
}

export default UserDetails