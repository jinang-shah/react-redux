import React from 'react'
import {Field, ErrorMessage} from 'formik'
import TestError from './TextError'

function Input(props) {
    const {label, name, ...rest} = props
  return (
    <div className='form-control'>
        <label htmlFor={name}>{label}</label>
        <Field id={name} name={name} {...rest} />
        <ErrorMessage name={name} component={TestError} />
    </div>
  )
}

export default Input