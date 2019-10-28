import React from 'react'
import Button from './index'

export default { title: 'Button' }

export const Primary = () => {
  return <Button>Press Me!</Button>
}

export const Secondary = () => {
  return <Button color="secondary">Press Me!</Button>
}
