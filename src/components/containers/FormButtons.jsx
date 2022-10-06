import React from 'react'
import { useFormContext } from 'react-hook-form'

export const FormButtons = ({ onSubmit }) => {
  const { handleSubmit } = useFormContext()

  return (
    <div>
      <button onClick={handleSubmit(onSubmit)} className="btn">
        Submit Button
      </button>
    </div>
  )
}
