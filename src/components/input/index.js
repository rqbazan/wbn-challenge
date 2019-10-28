import './style.css'
import React from 'react'
import Icon from '../icon'

export default function Input({ iconName, ...props }) {
  return (
    <div className="flex relative items-center bg-white">
      <input className="input" {...props} />
      {iconName && (
        <div className="pr-4">
          <Icon name={iconName} size={16} />
        </div>
      )}
    </div>
  )
}
