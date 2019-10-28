import React from 'react'
import Select from './index'

export default { title: 'Select' }

export const Normal = () => {
  return (
    <Select prompt="Select a color">
      <option>Orange</option>
      <option>Blue</option>
      <option>Brown</option>
    </Select>
  )
}
