import React from 'react'

function TextError(props) {
  return (
    <div style={{color: 'red'}} className='error'>{props.children}</div>
  )
}

export default TextError