const express = require('express')
const routes = require('./routes')

const app = express()
const port = process.env.PORT || 5000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api', routes)

app.listen(port, () =>
  console.log('Express server listening on port: ', port)
)