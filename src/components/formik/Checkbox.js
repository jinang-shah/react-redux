import { ErrorMessage, Field } from 'formik'
import React from 'react'
import TextError from './TextError'

function Checkbox(props) {
    const { name, label, options,  ...rest} = props
  return (
    <div className='form-control'>
        <label htmlFor={name}>{label}</label>
        <Field as='checkbox' name={name} {...rest}>
            {
                ({field}) => {
                    console.log("checkbox field ====> ", field)
                    return options.map(option => {
                        return (
                            <React.Fragment key={option.key}>
                                <input 
                                    type='checkbox' 
                                    id={option.value} 
                                    {...field} 
                                    value={option.value}
                                    checked={field.value.includes(option.value)}
                                />
                                <label htmlFor={option.value}>{option.key}</label>
                            </React.Fragment>
                        )
                    })
                }
            }
        </Field>
        <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Checkbox