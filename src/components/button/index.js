import './styles.css'
import React from 'react'

export default function Button({
  color = 'primary',
  className = '',
  ...props
}) {
  return (
    <button
      type="button"
      className={`button ${color} ${className}`}
      {...props}
    />
  )
}
