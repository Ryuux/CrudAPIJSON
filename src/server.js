const app = require('./app')

const config = require('../settings/config')

app.listen(config.PORT, () => {
  console.log(`\n Ready in PORT: ${config.PORT}`)
})
