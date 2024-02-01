import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyIceCream } from '../redux'

function HooksIceCream() {
    const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams)
    const dispatch = useDispatch()

  return (
    <div>
        <h2>Num of IceCreams - {numOfIceCreams}</h2>
        <button onClick={() => dispatch(buyIceCream())}>Buy IceCream</button>
    </div>
  )
}

export default HooksIceCream