import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

export const Form1Update = ({ defaultValues }) => {
  const { control, register } = useFormContext()
  const { type, name } = defaultValues

  return (
    <form>
      <input
        type="text"
        defaultValue={name}
        placeholder="Nombre"
        className="input input-bordered w-full max-w-xs"
        {...register('name')}
      />
      <Controller
        control={control}
        name="type"
        defaultValue={type}
        render={({ field }) => (
          <input
            type="text"
            placeholder="Type"
            className="input input-bordered w-full max-w-xs"
            {...field}
          />
        )}
      />
    </form>
  )
}
