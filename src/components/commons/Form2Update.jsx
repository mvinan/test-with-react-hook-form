import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

export const Form2Update = ({ defaultValues }) => {
  const { control, register } = useFormContext()
  const { email, lastName } = defaultValues

  return (
    <form>
      <input
        type="email"
        defaultValue={email}
        placeholder="Email"
        className="input input-bordered w-full max-w-xs"
        {...register('email')}
      />
      <Controller
        control={control}
        name="lastName"
        defaultValue={lastName}
        render={({ field }) => (
          <input
            type="text"
            placeholder="Apellido"
            className="input input-bordered w-full max-w-xs"
            {...field}
          />
        )}
      />
    </form>
  )
}
