import React, { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { Form1Update } from '~/components/commons/Form1Update'

export const Form1Container = () => {
  const { reset } = useFormContext()

  useEffect(() => {
    return function clean() {
      reset()
    }
  }, [])

  const defaultValues = {
    type: 'dragon',
    name: 'Miguel',
  }

  return (
    <div>
      <Form1Update defaultValues={defaultValues} />
    </div>
  )
}
