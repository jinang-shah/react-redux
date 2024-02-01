import React from 'react'
import { useNavigate } from 'react-router-dom'

function OrderSummary() {
    const navigate = useNavigate()
  return (
    <div>
        <h2>Order Confirmed</h2>
        <button onClick={() => {navigate(-1)}}>Go Back</button>
    </div>
  )
}

export default OrderSummary