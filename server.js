const express = require('express')
const api = require('./routes/api')

const app = express()
const port = 3000

app.get('/', (req, res, next) => {
  res.end('Top Page')
})

app.use(express.static('public'))
app.use('/api', api)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
