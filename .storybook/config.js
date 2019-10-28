import '~/styles.css'
import { configure, addParameters } from '@storybook/react'
import { create as createTheme } from '@storybook/theming'

addParameters({
  options: {
    theme: createTheme({
      base: 'dark',
      appContentBg: '#e8e8e8'
    })
  }
})

configure(require.context('~', true, /\.stories\.js$/), module)
