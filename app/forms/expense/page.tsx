"use client"

import { FC } from 'react'
import { Formik, Form, Field, FormikHelpers } from 'formik'
import * as Yup from 'yup'
import Input from '../../../components/Input'
import Button from '../../../components/Button'

interface ExpenseFormData {
  name: string
  amount: number
  date: number
}

const onSubmit = (values: ExpenseFormData, { setSubmitting }: FormikHelpers<ExpenseFormData>) => {
  try {
    setSubmitting(true)
    console.log(values)
  } catch (error) {
    console.log(error)
  } finally {
    setSubmitting(false)
  }

}

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  amount: Yup.number().required('Amount is required'),
  date: Yup.number().required('Date is required')
})

const ExpenseForm: FC = () => {
  return (
    <Formik<ExpenseFormData> initialValues={{ name: "", amount: 0, date: Date.now() }} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ values, handleChange, handleSubmit, errors, touched, isValid, isSubmitting }) => (
        <Form className='flex flex-col gap-4'>
          <h3>Record a new expense</h3>
          <Field name="name" placeholder="Name" as={Input} isInvalid={errors["name"] && touched['name']} error={errors['name']} />
          <Field name="amount" placeholder="Amount" type="number" as={Input} isInvalid={errors["amount"] && touched['amount']} error={errors['amount']} />
          <Field name="date" placeholder="Date" type="date" as={Input} isInvalid={errors["date"] && touched["date"]} error={errors['date']} onChange={(e: any) => { console.log(e) }} />
          <Button type='submit' isFormValid={isValid} disabled={isSubmitting || !isValid}>Submit</Button>
        </Form>
      )}
    </Formik>
  )
}

export default ExpenseForm