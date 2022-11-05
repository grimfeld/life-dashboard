import { FC, useEffect } from 'react'

import { Formik, Form, Field, FormikHelpers } from "formik"
import * as Yup from "yup"
import { logIn } from '../provider/Auth'
import Button from '../components/Button'
import Input from '../components/Input'

interface LoginFormData {
  email: string
  password: string
}

const onSubmit = async ({ email, password }: LoginFormData, { setSubmitting }: FormikHelpers<LoginFormData>) => {
  try {
    setSubmitting(true)
    await logIn(email, password)
  } catch (error) {
    throw error
  } finally {
    setSubmitting(false)
  }
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
})


const Login: FC = () => {
  return (
    <div className='h-screen grid place-items-center'>
      <Formik<LoginFormData> initialValues={{ email: "", password: "" }} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({ isSubmitting, errors }) => (
          <Form className=' w-1/3  border border-grey-400 p-8 py-32 rounded-lg flex flex-col gap-4'>
            <h2 className='font-bold text-2xl'>Login</h2>
            <Field name="email" type="email" placeholder="Email" as={Input} />
            <Field name="password" type="password" placeholder="Password" as={Input} />
            {errors.email && <div className='text-red-500'>{errors.email}</div>}
            {errors.password && <div className='text-red-500'>{errors.password}</div>}
            <Button type="submit" disabled={isSubmitting}>Submit</Button>
          </Form>
        )}
      </Formik>
    </div >
  )
}

export default Login