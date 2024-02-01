import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Products() {
  return (
    <div>
        <input style={{margin: '20px', width: '200px'}} placeholder='Search Products' />
        <nav style={{margin: '20px', width: '200px', padding: '20px', background:'rgb(108 134 121)'}}>
            <Link style={{margin: '20px'}} to='featured'>Featured</Link>
            <Link style={{margin: '20px'}} to='new'>New</Link>
        </nav>

        {/* Outlet => to display child route content */}
        <Outlet /> 
    </div>
  )
}

export default Products