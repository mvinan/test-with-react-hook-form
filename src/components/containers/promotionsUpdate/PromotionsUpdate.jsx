import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import Tabs from '~/components/commons/tabs/Tabs'
import { useActiveForm } from '~/components/hooks/useActiveForm'
import { FormButtons } from '../FormButtons'

export const PromotionsUpdate = () => {
  const methods = useForm()
  const { component: Form, handler } = useActiveForm()

  return (
    <FormProvider {...methods}>
      <Tabs />
      <Form />
      <FormButtons onSubmit={handler} />
    </FormProvider>
  )
}
