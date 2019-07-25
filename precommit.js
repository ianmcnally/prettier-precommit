const path = require('path')
const lintStaged = require('lint-staged')

lintStaged({
  configPath: path.resolve(__dirname, 'lint-staged.config.js'),
})
  .then(success => {
    console.log(success ? 'Linting was successful!' : 'Linting failed!')
  })
  .catch(e => console.error(e))
