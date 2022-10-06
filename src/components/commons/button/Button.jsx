import React from 'react'
import classNames from 'classnames'

function Button({ children, className, ...props }) {
  return (
    <button className={classNames('btn', className)} {...props}>
      {children}
    </button>
  )
}

export default Button
