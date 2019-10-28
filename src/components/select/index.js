import './style.css'
import React from 'react'
import Icon from '../icon'

export default function Select({ children, prompt, ...props }) {
  return (
    <div className="flex relative items-center">
      <select className="select" {...props}>
        {prompt && (
          <option value="" hidden>
            {prompt}
          </option>
        )}
        {children}
      </select>
      <span className="arrow absolute right-0 mr-4">
        <Icon name="cheveron-down" size={20} />
      </span>
    </div>
  )
}
