import React from 'react'
import { Link, Outlet, useSearchParams } from 'react-router-dom'

function Users() {
    const [ searchParams, setSearchParams] = useSearchParams()
    const showActiveUsers = searchParams.get('filter') === 'active'
  return (
    <div>
        <h2>Users</h2>
        <hr />
        <Link to='1'>User 1</Link>
        <Link to='2'>User 2</Link>
        <Link to='3'>User 3</Link>
        <Link to='4'>User 4</Link>
        <Outlet />
        <div>
            <button onClick={() => setSearchParams({filter:'active'}) }>Show Active Users</button>
            <button onClick={() => setSearchParams({}) }>Reset Filter</button>
        </div>
        {
            showActiveUsers ? <h2>Showing Active Users</h2> : <h2>Showing all Users.</h2>
        }
        
    </div>
  )
}

export default Users