const express = require('express')
const app = express()

app.set('port', (process.env.PORT || 5000))

app.use(express.static('dist'))

app.listen(app.get('port'), function() {
  console.log('running..')
})
