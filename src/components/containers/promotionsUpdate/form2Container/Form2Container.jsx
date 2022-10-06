import React, { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { Form2Update } from '~/components/commons/Form2Update'

export const Form2Container = () => {
  const { reset } = useFormContext()

  useEffect(() => {
    return function clean() {
      reset()
    }
  }, [])

  const defaultValues = {
    email: 'm@gmail.com',
    lastName: 'Gimenez',
  }

  return (
    <>
      <Form2Update defaultValues={defaultValues} />
    </>
  )
}
