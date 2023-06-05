const express = require('express')
const cors = require('cors')
const proxy = require('express-http-proxy')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/customer', proxy('http://localhost:8001'))  // customer - localhost:8000/customer
app.use('/shopping', proxy('http://localhost:8003'))  // shopping - localhost:8000/shopping
app.use('/', proxy('http://localhost:8002'))          // products - localhost:8000

app.listen(8000, () => {
  console.log('Gateway is listening on Port 8000')
})