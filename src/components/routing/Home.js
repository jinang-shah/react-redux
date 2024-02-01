import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

function Home() {
    const navigate = useNavigate()
  return (
    <div>
        <Navbar />
        <h2>Home</h2>
        <button onClick={() => navigate('order-summary')}>Place Order</button>
    </div>
  )
}

export default Home