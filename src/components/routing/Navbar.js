import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import { useAuth } from './Auth'

function Navbar() {

  const auth = useAuth()

    const navLinkStyle = ({isActive}) => {
        return {
            fontWeight: isActive ? 'bold': 'normal',
            textDecoration: isActive ? 'none' : 'underline',
            margin: '10px',
            paddingTop: '10px'
        }
    }

  return (
    <div style={{margin: '20px 0px', padding: '20px', background:'yellow', width: '90%'}}>
        {/* <Link to='/'>Home</Link>
        <Link to='/about'>About</Link> */}

        <NavLink style={navLinkStyle} to='/'>Home</NavLink>
        <NavLink style={navLinkStyle} to='/about'>About</NavLink>
        <NavLink style={navLinkStyle} to='/products'>Product</NavLink>
        <NavLink style={navLinkStyle} to='/profile'>Profile</NavLink>
        <NavLink style={navLinkStyle} to='/youtube'>Register on Youtube</NavLink>
        <NavLink style={navLinkStyle} to='/facebook'>Register on Facebook</NavLink>
        <NavLink style={navLinkStyle} to='/reusable-form'>Reusable Form</NavLink>
        {
          !auth.user && (
            <NavLink style={navLinkStyle} to='/login'>Login</NavLink>
          )
        }
    </div>
  )
}

export default Navbar