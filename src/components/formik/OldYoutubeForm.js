import { useFormik } from 'formik'
import React from 'react'
import './YoutubeForm.css'
import * as Yup from 'yup'

// initial form values
const initialValues = {
    name: '', //coresponds to  name attribute in html of input
    email: '',
    channel: ''
}

const onSubmit = (values) => {
    console.log('Form data ', values)
}

const validate = (values) => {
    let errors = {}

    if(!values.name){
        errors.name = 'Required'
    }

    if(!values.email){
        errors.email = 'Required'
    } else if (String(values.email).toLowerCase().match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    ){
        errors.email = 'Invalid email format'
    }

    if(!values.channel){
        errors.channel = 'Required'
    }

    return errors
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().required('Required').email('Invalid email format'),
    channel: Yup.string().required('Required'),
})

function OldYoutubeForm() {

    const formik = useFormik({
        initialValues,
        onSubmit,
        // validate,      // alternate to validationSchema
        validationSchema
    })

    // console.log( "Formic ==> ",formik.values)
    // console.log( "Formic ==> ",formik.errors)
    console.log( "Formic ==> ",formik.touched)

  return (
    <div >
        <form className='yform' onSubmit={formik.handleSubmit} >
            <div className='form-control'>
                <label htmlFor='name'>Name: </label>
                <input
                    type='text' 
                    id='name' 
                    name='name' 
                    // onChange={formik.handleChange} 
                    // value={formik.values.name}
                    // onBlur={formik.handleBlur}
                    {...formik.getFieldProps('name')}
                />
                { formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null }
            </div>

            <div className='form-control'>
                <label htmlFor='email'>E-mail: </label>
                <input 
                    type='email' 
                    id='email' 
                    name='email' 
                    onChange={formik.handleChange} 
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? <div className='error' >{formik.errors.email}</div> : null}
            </div>
            
            <div className='form-control'>
                <label htmlFor='channel'>Channel: </label>
                <input 
                    type='text' 
                    id='channel' 
                    name='channel' 
                    onChange={formik.handleChange} 
                    value={formik.values.channel}
                    onBlur={formik.handleBlur} // to maintain if field has been touched or not
                />
                { formik.touched.channel && formik.errors.channel ? <div className='error'> {formik.errors.channel}</div> : null}
            </div>

            <button type='submit' style={{width: '600ox'}}>Submit</button>
        </form>
    </div>
  )
}

export default OldYoutubeForm
