import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { buyCake} from '../redux'

/* 
 
  useSelector
 -> useSelector is hook provided by react-redux, which act as close equivalent to mapStateToProps

  useDispatch
  -> useDispatch hook returns a reference to dispatch function from redux store

*/

function HooksCakeContainer() {

    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()

  return (
    <div>
        <h2>Number of Cakes Hooks - {numOfCakes}</h2>
        <button onClick={() => dispatch(buyCake())} >Buy Cake</button>
    </div>
  )
}

export default HooksCakeContainer