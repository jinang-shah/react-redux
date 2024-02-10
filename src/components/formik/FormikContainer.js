import { Formik, Form } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

function FormikContainer() {

    const genderDropDownOptions = [
        {key: 'Select an option', value:''},
        {key: 'Male', value:'male'},
        {key: 'Female', value:'female'},
    ]

    const genderRadioOptions = [
        {key: 'Male', value:'male'},
        {key: 'Female', value:'female'},
    ]

    const checkBoxOptions = [
        {key: 'completed section 1', value:'complete1'},
        {key: 'completed section 2', value:'complete2'},
    ]

    const initialValues = {
        email: '',
        description: '',
        gender: '',
        genderRadio: '',
        checkBoxOptions: [],
        birthDate: null
    }

    const validationSchema = new Yup.ObjectSchema({
        email: Yup.string().required('Required').email('Please enter valid email.'),
        description: Yup.string().required('Required'),
        gender: Yup.string().required('Required'),
        genderRadio: Yup.string().required('Required'),
        checkBoxOptions: Yup.array().required('Required'),
        birthDate: Yup.date().required('Required').nullable(),
    })
    
    const onSubmit = values => console.log('Form data ===> ', values)

  return (
    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
    >
        {
            formik => <Form>

                {/* input */}
                <FormikControl 
                    control='input' 
                    type='email' 
                    label='Email' 
                    name='email' 
                />

                {/* textarea */}
                <FormikControl 
                    control='textarea'
                    label='Description' 
                    name='description' 
                />

                {/* select */}
                <FormikControl 
                    control='select'
                    label='Gender' 
                    name='gender'
                    options={genderDropDownOptions} 
                />

                {/* radio */}
                <FormikControl 
                    control='radio'
                    label='Gender' 
                    name='genderRadio'
                    options={genderRadioOptions} 
                />

                {/* checkbox */}
                <FormikControl 
                    control='checkbox'
                    label='Checkbox' 
                    name='checkBoxOptions'
                    options={checkBoxOptions} 
                />

                {/* date-picker */}
                <FormikControl 
                    control='date'
                    label='Birth Date' 
                    name='birthDate'
                />


                <button type='submit'>Submit</button>
            </Form>
        }
    </Formik>
  )
}

export default FormikContainer