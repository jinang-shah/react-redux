import React from 'react'
import { buyCake } from '../redux'
import { connect } from 'react-redux'


function CakeContainer(props) {
  return (
    <div>
      <h2>Number of cakes from container : {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy cake</button>
    </div>
  )
}

// this function get's redux state as parameter
const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

// this function get's redux dispatch as parameter
const mapDispatchToProps = dispatch => {
    return {
      buyCake: () => dispatch(buyCake())
    }
}

// connect function connects react component with redux store
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
