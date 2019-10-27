/* eslint no-param-reassign: off */
const path = require('path')

module.exports = async ({ config }) => {
  const cssRule = config.module.rules.find(({ test }) => test.test('.css'))
  const postCss = cssRule.use.find(({ loader }) => /postcss/g.test(loader))

  postCss.options = {
    config: {
      path: path.resolve('postcss.config.js')
    }
  }

  config.resolve.alias = {
    '~': path.resolve('src')
  }

  return config
}
