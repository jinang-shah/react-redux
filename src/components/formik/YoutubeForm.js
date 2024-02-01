import { useFormik, Formik, Form, Field, ErrorMessage, FieldArray } from 'formik'
import React from 'react'
import './YoutubeForm.css'
import * as Yup from 'yup'
import TextError from './TextError'

// initial form values
const initialValues = {
    name: '', //coresponds to  name attribute in html of input
    email: '',
    channel: '',
    comments: '',
    address: '',
    social: {
        facebook: '',
        twitter: ''
    },
    phoneNumbers: ['',''],
    hobbies: ['']
}

const onSubmit = (values) => {
    console.log('Form data ', values)
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().required('Required').email('Invalid email format'),
    channel: Yup.string().required('Required'),
    comments: Yup.string().required('Required')
})

function YoutubeForm() {

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form className='yform'>
            <div className='form-control'>
                <label htmlFor='name'>Name: </label>
                <Field type='text' id='name' name='name' placeholder='Enter name'/>
                <ErrorMessage name='name' />
            </div>

            <div className='form-control'>
                <label htmlFor='email'>E-mail: </label>
                <Field type='email' id='email' name='email' />
                {/* <ErrorMessage name='email' component='div' /> */}
                <ErrorMessage name='email' component={TextError} />
            </div>
            
            <div className='form-control'>
                <label htmlFor='channel'>Channel: </label>
                <Field type='text' id='channel' name='channel' />
                <ErrorMessage name='channel' />
            </div>

            {/* test-area */}
            <div>
                <label  htmlFor='comments'>Comments</label>
                <Field as='textarea' id='comments' name='comments' />
                <ErrorMessage name='comments' >
                    {/*  render props method => just think of it as => functions as childrean */}
                    {
                        (errorMessage) => <div className='error'>{errorMessage}</div>
                    }
                </ErrorMessage>
            </div>

            <div>
                <label  htmlFor='address'>Address</label>
                <Field name='address'>
                    {/*  render props method => just think of it as => functions as childrean */}
                    {
                        (props) => {
                            const { field, form, meta} = props
                            console.log(props, 'render props')
                            return (
                                <div>
                                    <input type='text' id='address' {...field} />
                                    {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                                </div>
                            )
                        }
                    }
                </Field>
                <ErrorMessage name='address' />
            </div>

            <div className='form-control'>
                <label htmlFor='facebook'>Facebook: </label>
                <Field type='text' id='facebook' name='social.facebook' />
            </div>

            <div className='form-control'>
                <label htmlFor='twitter'>Twitter: </label>
                <Field type='text' id='twitter' name='social.twitter' />
            </div>

            <div className='form-control'>
                <label htmlFor='primaryPh'>Primary Phone: </label>
                <Field type='text' id='primaryPh' name='phoneNumbers[0]' />
            </div>

            <div className='form-control'>
                <label htmlFor='secondaryPh'>Secondary Phone: </label>
                <Field type='text' id='secondaryPh' name='phoneNumbers[1]' />
            </div>

            <div className='form-control'>
                <label htmlFor='secondaryPh'>Hobbies: </label> 
                <FieldArray name='hobbies' >
                    {
                        (fieldArrayProps) => {
                            const {push, remove, form} = fieldArrayProps
                            const { values } = form
                            const { hobbies } = values
                            console.log("fieldArrayProps ===> ", fieldArrayProps)
                            return (
                                <div>
                                    {
                                        hobbies.map( (hobby,index) => (
                                            <div key={index}>
                                                <Field name={`hobbies[${index}]`}/>
                                                <button 
                                                    type='button' 
                                                    onClick={() => remove(index)}
                                                    disabled={hobbies.length === 1 ? true : false}
                                                >-</button>
                                                <button
                                                    type='button' 
                                                    onClick={() => push('')}
                                                >+</button>
                                            </div>
                                        )
                                    )}
                                </div>
                            )
                        }
                    }
                </FieldArray>
            </div>

            <button type='submit' style={{width: '600ox'}}>Submit</button>
        </Form>
    </Formik>
  )
}

export default YoutubeForm
