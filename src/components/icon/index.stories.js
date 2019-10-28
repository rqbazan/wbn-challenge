import React from 'react'
import Icon from './index'
import icons from './icons.json'

export default { title: 'Icon' }

export const Iconography = () => {
  return (
    <div className="flex flex-wrap">
      {Object.keys(icons).map(icon => (
        <div className="m-2">
          <Icon name={icon} size={32} />
        </div>
      ))}
    </div>
  )
}
