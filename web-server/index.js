const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/apple', function (req, res) {
    res.send('APPLE!!!!!!')
  })

app.listen(3000, function() {
    console.log('running!!!')
})

console.log('end')