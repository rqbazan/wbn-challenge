import './style.css'
import React from 'react'

export default function Button({ color = 'primary', ...props }) {
  return <button type="button" className={`button ${color}`} {...props} />
}
