import { Formik, Form, Field, ErrorMessage } from 'formik'
import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'

const initialValues = {
    firstName: '',  
    lastName: '',
    email: '',
    phone: '',
}

const savedValuese = {
    firstName: 'Jinang',  
    lastName: 'Shah',
    email: 'sss@gmai.com',
    phone: '9595959595',
}

const validationSchema = new Yup.ObjectSchema({
    firstName: Yup.string().required(),  
    lastName: Yup.string().required(),
    email: Yup.string().required().email(),
    phone: Yup.string().required().length(10),
})

const onSubmit = (value, onSubmitProps) => {
    console.log("form values ===> ", value)
    console.log("onSubmitProps ===> ", onSubmitProps)
    onSubmitProps.setSubmitting(false)
    onSubmitProps.resetForm()
}

function FacebookForm() {

    const [formValues, setFormValues] = useState(null)

    useEffect(()=>{
        console.log("formValues" , formValues)
    }, [formValues])

  return (
    <Formik 
        initialValues={formValues || initialValues} 
        validationSchema={validationSchema} 
        onSubmit={onSubmit}
        enableReinitialize
    >
        {
            (formik) => {

                console.log("formik ===> ", formik)

                return (
                    <Form>
                        <div className='form-control'>
                            <label >First Name: </label>
                            <Field type='text' name='firstName' placeholder='John'  />
                            <ErrorMessage name='firstName' />
                        </div>

                        <div className='form-control'>
                            <label >Last Name: </label>
                            <Field type='text' name='lastName' placeholder='Doe'  />
                            <ErrorMessage name='lastName' />
                        </div>

                        <div className='form-control'>
                            <label >Email: </label>
                            <Field type='text' name='email' placeholder='john@gmail.com'  />
                            <ErrorMessage name='email' />
                        </div>

                        <div className='form-control'>
                            <label >Phone: </label>
                            <Field type='text' name='phone' placeholder='9999999999'  />
                            <ErrorMessage name='phone' />
                        </div>

                        <button type='button' onClick={() => setFormValues(savedValuese)}>Load saved data</button>
                        <button type='submit' disabled={(!formik.isValid || formik.isSubmitting)}>Submit</button>
                    </Form>
                )
            }
        }
    </Formik>
  )
}

export default FacebookForm
